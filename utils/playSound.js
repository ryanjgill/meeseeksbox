const exec = require('child-process-promise').exec

module.exports = (LED, soundList, inSession) => {
  exec(`mplayer -vo null -ao alsa -softvol -volume 50 mp3/${soundList.pop()}`)
  .then(function (result) {
    LED.writeSync(0)
    inSession = false
  })
  .catch(function (err) {
    LED.writeSync(0)
    inSession = false
  })
}