const exec = require('child-process-promise').exec

module.exports = (LED, soundList) => {
  exec(`mplayer -vo null -ao alsa -softvol -volume 50 mp3/${soundList.pop()}`)
  .then(function (result) {
    LED.writeSync(0);
  })
  .catch(function (err) {
    LED.writeSync(0);
  })
}