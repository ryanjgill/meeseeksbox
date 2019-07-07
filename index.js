const Gpio = require('onoff').Gpio;
const LED = new Gpio(25, 'out'); // LED on GOOGLE Voice HAT
const pushButton = new Gpio(23, 'in', 'both'); // Button on GOOGLE Voice HAT
const playSound = require('./utils/playSound')
const updateList = require('./utils/updateList')
let soundList = []
let inSession = false

pushButton.watch(function (err, value) {
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }

  if (inSession) {
    console.log('Already in session, please try again when light turns off.')
    return;
  }

  LED.writeSync(1); //turn LED on
  inSession = true

  if (value === 0) {
    soundList = soundList.length === 0
      ? updateList()
      : soundList

    playSound(soundList) // play sound when pressed
      .then(() => {
        LED.writeSync(0)
        inSession = false
      })
      .catch((err) => {
        LED.writeSync(0)
        inSession = false
        console.log(err)
      })
  }
});

function unexportOnClose() { //function to run when exiting program
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c

