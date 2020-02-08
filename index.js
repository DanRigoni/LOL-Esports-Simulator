const input = require('./src/input')
const state = require('./src/state')

const { Rift, Neutral } = require('./Structures/goals')
const { Team, Player } = require('./Structures/players')

const { simulateGame } = require('./src/simulator')


async function start() {

    // input()

    const blueSide = new Rift()
    const redSide = new Rift()
    const neutral = new Neutral()

    const toplnaer1 = new Player('Impact', 80)
    const jungler1 = new Player('Broxah', 82)
    const midlaner1 = new Player('Jensen', 83)
    const botlaner1 = new Player('DoubleLift', 84)
    const support1 = new Player('CoreJJ', 85)

    const toplnaer2 = new Player('Wunder', 85)
    const jungler2 = new Player('Jankos', 82)
    const midlaner2 = new Player('Perkz', 83)
    const botlaner2 = new Player('Caps', 84)
    const support2 = new Player('Mikiyx', 80)

    const team1 = new Team(
        'Team Liquid',
        toplnaer1,
        jungler1,
        midlaner1,
        botlaner1,
        support1,
        blueSide
        )    

    const team2 = new Team(
        'G2 Esports',
        toplnaer2,
        jungler2,
        midlaner2,
        botlaner2,
        support2,
        redSide
        )

   
    await simulateGame(team1, team2, neutral)
    // const content = state.load()
    console.log(team1, team2);
    // console.log(neutral);
    // console.log(content);

}

start() 