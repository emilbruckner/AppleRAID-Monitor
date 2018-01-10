# AppleRAID Drive Monitor

A simple script I use to monitor my RAID setup. It gives a notification if something is wrong.
The terminal command diskutil ar list gives some info about the systems RAIDs.
Since I don't know what the output could look like when something is wrong, I check the occurrences of the word 'Online'.
So if you want to use this script, you have to change that number in the `index.js` file.

To actually monitor with this thing, I set up a cronjob.
