const readline = require('readline-sync')
const state = require('./state.js')

function robot() {
    const content = {
        mode: ''
    }
    
    content.mode = askAndReturnMode()
    state.save(content)
    
    function askAndReturnMode() {
        const prefixes = ['League', 'Best of five', 'Best of one']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        console.log(selectedPrefixText);
        return selectedPrefixText
    }

}

module.exports = robot