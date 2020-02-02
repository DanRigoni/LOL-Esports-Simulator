const readline = require('readline-sync')

function robot() {
    const options = {mode: ''}
    
    options.mode = askAndReturnMode()
    
    function askAndReturnMode() {
        const prefixes = ['League', 'Best of five', 'Best of one']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        console.log(selectedPrefixText);
        return selectedPrefixText
    }

}

module.exports = robot