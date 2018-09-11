const fs = require('fs')
const exec = require('child-process-promise').exec
const fileNames = fs.readdirSync('./mp3')

module.exports = (LED) => {
  let getRandomNumber = max => {
    return Math.floor(Math.random() * max)
  }

  let randomNumber = getRandomNumber(fileNames.length)
  let clipName = fileNames[randomNumber]

  exec(`mplayer -vo null -ao alsa -softvol -volume 50 mp3/${clipName}`)
    .then(function (result) {
        let stdout = result.stdout;
        let stderr = result.stderr;
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
        LED.writeSync(0);

    })
    .catch(function (err) {
        console.error('ERROR: ', err);
        LED.writeSync(0);
    })
}