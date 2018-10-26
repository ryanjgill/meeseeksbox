const fs = require('fs')
const _ = require('lodash')

module.exports = () => _.shuffle(
  fs.readdirSync('./mp3')
    .filter(file => file.endsWith('.mp3'))
)