const robots = {
    input: require('./robots/input'),
    state: require('./robots/state.js')
}

function start() {
    robots.input()

    const content = robots.state.load()

    console.log(content);

}

start()
