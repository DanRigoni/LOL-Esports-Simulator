const { Rift, Neutral } = require('./Structures/goals')
const { Team, Player } = require('./Structures/players')



const robots = {
    input: require('./robots/input'),
    state: require('./robots/state.js'),
}

function start() {

    const content = {}

    content.input = robots.input()
    content.gameStructure = startGameStructure()
    

    console.log(content);
    robots.state.save(content)

}

function startGameStructure() {
    const content = {}
    const blueSide = new Rift()
    const redSide = new Rift()
    const neutral =  new Neutral()

    const toplanerBlue =  new Player('Wunder', 86)
    const junglerBlue =  new Player('Jankos', 82)
    const midlanerBlue =  new Player('Perkz', 83)
    const botlanerBlue =  new Player('Caps', 86)
    const supportBlue =  new Player('MikiX', 80)

    const teamBlue = new Team('G2 Esports', toplanerBlue, junglerBlue, midlanerBlue, botlanerBlue, supportBlue)

    const toplanerRed =  new Player('TheShy', 88)
    const junglerRed =  new Player('Leyan', 80)
    const midlanerRed =  new Player('Rookie', 86)
    const botlanerRed =  new Player('Puff', 81)
    const supportRed =  new Player('Fate', 81)

    const teamRed = new Team('Invictus Gaming', toplanerRed, junglerRed, midlanerRed, botlanerRed, supportRed)


    content.teams = { teamBlue, teamRed}
    content.rift = {blueSide, redSide, neutral}
    return content

}

start()

