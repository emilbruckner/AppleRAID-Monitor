const notifier = require('node-notifier')
const exec = require('child_process').exec
const axios = require('axios')

const occurrences = text => (text.match(/Online/g) || []).length

const SHOULD_NUMBER_OF_ONLINE_DRIVES = 9

exec("/usr/sbin/diskutil appleRAID list", function(err, stdout, stderr) {
  if (occurrences(stdout) != SHOULD_NUMBER_OF_ONLINE_DRIVES) {
    const message = 'Something is wrong with the drives! ' + stdout
    notifier.notify({
      title: 'RAID Alert',
      message,
    })
    sendToEmil(message)
  }
})

function sendToEmil(text) {
	axios.post("https://postman.timo.sh/TELEGRAM_ID/", text)
		.then(function (response) {
		    console.log(response);
		})
		.catch(function (response) {
		    console.log(response);
		});
}
