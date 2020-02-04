class Rift {
    constructor() {
        this.topTower = 4
        this.midTower = 4
        this.botTower = 4

        this.baseTower = true
        this.nexus = true
    }

    towerTopDown() {
        if (this.topTower > 0) {
            this.topTower -= 1;
        } else {
            this.baseTower = false
            this.nexus = false
        }
    }

    towerMidDown() {
        if (this.midTower > 0) {
            this.midTower -= 1;
        } else {
            this.baseTower = false
            this.nexus = false
        }
    }

    towerBotDown() {
        if (this.botTower > 0) {
            this.botTower -= 1;
        } else {
            this.baseTower = false
            this.nexus = false
        }
    }
}

class Neutral {
    constructor() {
        this.time = 0

        this.dragon = false
        this.herald = false
        this.baron = false

        this.returnDragon = 0
        this.returnHerald = 0
        this.returnBaron = 0
    }

    shootDownDragon() {
        if (this.dragon) {
            this.dragon = false
        }
    }

    shootDownHerald() {
        if (this.herald) {
            this.herald = false
        }
    }

    shootDownBaron() {
        if (this.baron) {
            this.baron = false
        }
    }
    

    check() {
        if (returnDragon == 4) {
            this.dragon = true
        }

        else if (returnHerald == 5) {
            this.dragon = true
        }

        else if (returnBaron == 5) {
            this.dragon = true
        }


        if (this.time == 5) {
            this.dragon = true
        }

        else if (this.time == 8) {
            this.herald = true
        }

        else if (this.time == 20) {
            this.baron = true
        }

        if (this.dragon === false && this.time > 5) {
            this.returnBaron++
        }

        if (this.herald === false && this.time > 8 && this.time < 20) {
            this.returnBaron++
        }

        if (this.baron === false && this.time > 20) {
            this.returnBaron++
        }


    }


}


module.exports = {
    Rift,
    Neutral
}