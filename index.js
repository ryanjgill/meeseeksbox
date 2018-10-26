const Gpio = require('onoff').Gpio;
const LED = new Gpio(25, 'out'); // LED on GOOGLE Voice HAT
const pushButton = new Gpio(23, 'in', 'both'); // Button on GOOGLE Voice HAT
const playSound = require('./utils/playSound')
const updateList = require('./utils/updateList')
let soundList = []

pushButton.watch(function (err, value) {
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }

  LED.writeSync(1); //turn LED on

  if (value === 0) {
    soundList = soundList.length === 0
      ? updateList()
      : soundList

    playSound(LED, soundList) // play sound when pressed
  }
});

function unexportOnClose() { //function to run when exiting program
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c

