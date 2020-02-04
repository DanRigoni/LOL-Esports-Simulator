const { Rift, Neutral } = require('./Structures/Goals')


const robots = {
    input: require('./robots/input'),
    state: require('./robots/state.js'),
}

function start() {

    const content = {}

    content.input = robots.input()
    content.rift = startGameStructure()
    

    console.log(content);
    robots.state.save(content)

}

function startGameStructure() {
    const content = {}
    const blueSide = new Rift()
    const redSide = new Rift()
    const neutral =  new Neutral()

    content.rift = {blueSide: blueSide ,redSide: redSide, neutral: neutral}
    return content.rift

}

start()

