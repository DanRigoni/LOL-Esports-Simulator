
class Team {
    constructor(teamName, toplaner, jungler, midlaner, botlaner, support, side) {
        this.teamName = teamName
        this.toplaner = toplaner
        this.jungler = jungler
        this.midlaner = midlaner
        this.botlaner = botlaner
        this.support = support
        this.side = side
    }

    
}

class Player {
    constructor(name, skill) {
        this.name = name
        this.skill = skill

        this.kills = 0
        this.deaths = 0
        this.assists = 0

        this.advantage = 0

        this.getSkillok = this.getSkill() 
    }

    getSkill() {
        return this.skill + this.advantage
    }

    getKDA() {
        return `${this.kills}/${this.deaths}/${this.assists}`
    }

    killed() {
        this.kills++
        this.advantage++
    }

    died() {
        this.deaths++
        this.advantage /= 2
    }

    assisted() {
        this.assists++
        this.advantage += 0.4
    }
}

module.exports = {
    Player,
    Team
}