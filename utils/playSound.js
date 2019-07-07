const exec = require('child-process-promise').exec

module.exports = (soundList) => {
  return exec(`mplayer -vo null -ao alsa -softvol -volume 50 mp3/${soundList.pop()}`)
}