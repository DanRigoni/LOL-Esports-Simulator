const readline = require('readline-sync')
const state = require('./state.js')

function input() {
    const content = {}

    content.mode = askAndReturnMode()
    content.league = askAndReturnLeague()
    checkAndSaveTeams(content)

    function askAndReturnMode() {
        const prefixes = ['League', 'Best of five', 'Best of one']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one mode: ')
    
        return selectedPrefixIndex
    }

    function askAndReturnLeague() {
        // check league here
        
        const prefixes = ['LCK', 'LPL', 'LEC', 'LCS',] 
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one league: ')
    
        const selectedPrefixText = prefixes[selectedPrefixIndex]
    
        return selectedPrefixText
    }

    function askAndReturnTeams() {
        const prefixes = ['SK Telecom T1', 'DAMWOM Gaming', 'GEN.G', 'Afreeca Freecs',]
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one team: ')
    
        const selectedPrefixText = prefixes[selectedPrefixIndex]
    
        return selectedPrefixText
    }

    function checkAndSaveTeams(content) {
        switch (content.mode) {
            case 1:
                content.teams = [askAndReturnTeams()]
                content.teams.push(askAndReturnTeams())
                break;
            case 2:
                content.teams = [askAndReturnTeams()]
                content.teams.push(askAndReturnTeams())
                break;
        }
        state.save(content)
    }

}

module.exports = input



