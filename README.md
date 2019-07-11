# meeseeksbox
Play random sound clips of Mr Meeseeks on Raspberry Pi using Google Voice HAT

### Getting started
I usually setup the pi using GassitPi AYI drivers install scripts. They can be found [here](https://github.com/shivasiddharth/GassistPi/tree/master/audio-drivers/AIY-HAT/scripts). 
- Clone the repo and run the scripts in side the listed folder above.
- restart pi
- install `mplayer` with `sudo apt-get install mplayer -y`

To test if the drivers were installed, you can use `aplay nameOfSoundFile.wav` in the `sample-audio-files` folder.
- `cd ~/GassistPi/sample-audio-files/ && aplay Bong.wav` should play a sound from the AIY speaker if installed correctly.
