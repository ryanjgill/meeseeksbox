const exec = require('child-process-promise').exec
const updateList = require('./updateList')

module.exports = (LED, soundList) => {
    if (!soundList || soundList.length === 0) {
        soundList = updateList();
    }    

    exec(`mplayer -vo null -ao alsa -softvol -volume 50 mp3/${soundList.pop()}`)
    .then(function (result) {
        LED.writeSync(0);
    })
    .catch(function (err) {
        LED.writeSync(0);
    })
}