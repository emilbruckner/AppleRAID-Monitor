const notifier = require('node-notifier')
const exec = require('child_process').exec

const occurrences = text => (text.match(/Online/g) || []).length

const SHOULD_NUMBER_OF_ONLINE_DRIVES = 9

exec("diskutil ar list", function(err, stdout, stderr) {
  if (occurrences(stdout) != SHOULD_NUMBER_OF_ONLINE_DRIVES) {
    notifier.notify({
      title: 'RAID Alert',
      message: 'Something is wrong with the drives',
    })
  }
})
