const robots = {
    askMode: require('./robots/input'),
    state: require('./robots/state.js')
}

function start() {
    robots.askMode()

    const content = robots.state.load()

    console.log(content);

}

start()
