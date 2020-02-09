
function simulateGame(team1, team2, neutral) {
    let ok = 1
    while (team1.side.nexus && team2.side.nexus) {
        // console.log((Math.floor(Math.random() * 70)));
        console.log(neutral.time);

        if (ok >= 51) {
            towerDestroyBot(team1, team2)
            towerDestroyBot(team1, team2)
            towerDestroyBot(team1, team2)
            towerDestroyBot(team1, team2)
            towerDestroyBot(team1, team2)
            towerDestroyBot(team1, team2)


        }

        DownDragon(team1, neutral)
        DownHerald(team1, team2, neutral)
        DownBaron(team1, neutral)
        neutral.check()
        ok++
    }
}
//skill comparasion
function skillComparasionTopXTop(teamx, teamy) {
    return teamx.toplaner.getSkill() > teamy.toplaner.getSkill() 
}

function skillComparasionJunXJun(teamx, teamy) {
    return teamx.jungler.getSkill() > teamy.jungler.getSkill() 
}

function skillComparasionMidXMid(teamx, teamy) {
    return teamx.midlaner.getSkill() > teamy.midlaner.getSkill() 
}

function skillComparasionBotXBot(teamx, teamy) {
    return teamx.botlaner.getSkill() > teamy.botlaner.getSkill() 
}

function skillComparasionSupXSup(teamx, teamy) {
    return teamx.support.getSkill() > teamy.support.getSkill() 
}

function skillComparasionTopAndJunXTopAndJun(teamx, teamy) {
    return teamx.toplaner.getSkill() + teamx.jungler.getSkill() > teamy.toplaner.getSkill() + teamy.jungler.getSkill()
}

function skillComparasionMidAndJunXMidAndJun(teamx, teamy) {
    return teamx.midlaner.getSkill() + teamx.jungler.getSkill() > teamy.midlaner.getSkill() + teamy.jungler.getSkill()
}

function skillComparasionBottomXBottom(teamx, teamy) {
    return teamx.botlaner.getSkill() + teamx.support.getSkill() > teamy.botlaner.getSkill() + teamy.support.getSkill()
}

function skillComparasionBottomAndJunXBottomAndJun(teamx, teamy) {
    return teamx.botlaner.getSkill() + teamx.support.getSkill() + teamx.jungler.getSkill() > teamy.botlaner.getSkill() + teamy.support.getSkill() + teamy.jungler.getSkill()
}

function skillComparasionMidAndTopXMidAndTop(teamx, teamy) {
    return teamx.midlaner.getSkill() + teamx.toplaner.getSkill() > teamy.midlaner.getSkill() + teamy.toplaner.getSkill()
}

function skillComparasionMidAndBottomXMidAndBottom(teamx, teamy) {
    return teamx.midlaner.getSkill() + teamx.support.getSkill() + teamx.botlaner.getSkill() > teamy.midlaner.getSkill() + teamy.support.getSkill() + teamy.botlaner.getSkill()
}

// solo kills
function soloKillTopXTop(teamx, teamy) {
    if (skillComparasionTopXTop(teamx, teamy)) {
        teamx.toplaner.killed()
        teamy.toplaner.died()
    }
}

function soloKillJunXJun(teamx, teamy) {
    if (skillComparasionJunXJun(teamx, teamy)) {
        teamx.jungler.killed()
        teamy.jungler.died()
    }
}

function soloKillMidXMid(teamx, teamy) {
    if (skillComparasionMidXMid(teamx, teamy)) {
        teamx.midlaner.killed()
        teamy.midlaner.died()
    }
}

function soloKillBotXBot(teamx, teamy) {
    if (skillComparasionBotXBot(teamx, teamy)) {
        teamx.botlaner.killed()
        teamy.botlaner.died()
    }
}

function soloKillSupXSup(teamx, teamy) {
    if (skillComparasionSupXSup(teamx, teamy)) {
        teamx.support.killed()
        teamy.support.died()
    }
}

function soloKillBottomXBottom(teamx, teamy) {
    soloKillBotXBot(teamx, teamy)
    soloKillSupXSup(teamx, teamy)
}

// matchups

function matchupTopXTop(teamx) {
    if ((Math.floor(Math.random() * 10)) > (Math.floor(Math.random() * 10))) {
        teamx.toplaner.matchup()
    }
}

function matchupJunXJun(teamx) {
    if ((Math.floor(Math.random() * 10)) > (Math.floor(Math.random() * 10))) {
        teamx.jungler.matchup()
    }
}

function matchupMidXMid(teamx) {
    if ((Math.floor(Math.random() * 10)) > (Math.floor(Math.random() * 10))) {
        teamx.midlaner.matchup()
    }
}

function matchupBottomXBottom(teamx) {
    if ((Math.floor(Math.random() * 10)) > (Math.floor(Math.random() * 10))) {
        teamx.botlaner.matchup()
        teamx.support.matchup()
    }
}

// ganks

function gankJungleTop(teamx, teamy) {
    if (skillComparasionTopAndJunXTopAndJun(teamx, teamy)) {
        let whoKill = Math.floor(Math.random() * 2)

        if (whoKill == 0) {
            teamx.jungler.killed()
            teamx.toplaner.assisted()
        } else {
            teamx.toplaner.killed()
            teamx.jungler.assisted()
        }
        teamy.toplaner.died()
    }
}

function gankJungleMid(teamx, teamy) {
    if (skillComparasionMidAndJunXMidAndJun(teamx, teamy)) {
        let whoKill = Math.floor(Math.random() * 2)

        if (whoKill == 0) {
            teamx.jungler.killed()
            teamx.midlaner.assisted()
        } else {
            teamx.midlaner.killed()
            teamx.jungler.assisted()
        }
        teamy.midlaner.died()
    }
}

function gankJungleBottom(teamx, teamy) {
    if (skillComparasionBottomAndJunXBottomAndJun(teamx, teamy)) {
        let whoKill = Math.floor(Math.random() * 2)
        let whoDied = Math.floor(Math.random() * 2)


        if (whoKill == 0) {
            teamx.jungler.killed()
            teamx.botlaner.assisted()
            teamx.support.assisted()
        } else {
            teamx.botlaner.killed()
            teamx.jungler.assisted()
            teamx.support.assisted()
        }

        if (whoDied == 0) {
            teamy.botlaner.died()
        } else {
            teamy.support.died()
        }
    }
}

function gankMidTop(teamx, teamy) {
    if (skillComparasionMidAndTopXMidAndTop(teamx, teamy)) {
        let whoKill = Math.floor(Math.random() * 2)

        if (whoKill == 0) {
            teamx.midlaner.killed()
            teamx.toplaner.assisted()
        } else {
            teamx.toplaner.killed()
            teamx.midlaner.assisted()
        }
        teamy.toplaner.died()
    }
}

function gankMidBot(teamx, teamy) {
    if (skillComparasionMidAndTopXMidAndTop(teamx, teamy)) {
        let whoKill = Math.floor(Math.random() * 2)
        let whoDied = Math.floor(Math.random() * 2)

        if (whoKill == 0) {
            teamx.midlaner.killed()
            teamx.botlaner.assisted()
            teamx.support.assisted()

        } else {
            teamx.botlaner.killed()
            teamx.midlaner.assisted()
            teamx.support.assisted()
        }
        
        if (whoDied == 0) {
            teamy.botlaner.died()
        } else {
            teamy.support.died()
        }
    }
}

// Goals

function getAdvantageDestroyTower(teamx) {
    teamx.toplaner.enemyTowerDown()
    teamx.jungler.enemyTowerDown()
    teamx.midlaner.enemyTowerDown()
    teamx.botlaner.enemyTowerDown()
    teamx.support.enemyTowerDown()

}

function getAdvantageShootDownDragon(teamx) {
    teamx.toplaner.shootDownDragon()
    teamx.jungler.shootDownDragon()
    teamx.midlaner.shootDownDragon()
    teamx.botlaner.shootDownDragon()
    teamx.support.shootDownDragon()

}

function getAdvantageShootDownBaron(teamx) {
    teamx.toplaner.shootDownBaron()
    teamx.jungler.shootDownBaron()
    teamx.midlaner.shootDownBaron()
    teamx.botlaner.shootDownBaron()
    teamx.support.shootDownBaron()

}

function towerDestroyTop(teamx, teamy) {
    teamy.side.towerTopDown()
    getAdvantageDestroyTower(teamx)

}

function towerDestroyMid(teamx, teamy) {
    teamy.side.towerMidDown()
    getAdvantageDestroyTower(teamx)

}

function towerDestroyBot(teamx, teamy) {
    teamy.side.towerBotDown()
    getAdvantageDestroyTower(teamx)

}

function DownDragon(teamx, neutral) {
    if (neutral.shootDownDragon()) {
        getAdvantageShootDownDragon(teamx)
    }
}

function DownHerald(teamx, teamy, neutral) {
    if (neutral.shootDownHerald()) {
        towerDestroyMid(teamx, teamy)
    }
}

function DownBaron(teamx, neutral) {
    if (neutral.shootDownBaron()) {
        getAdvantageShootDownBaron(teamx)
    }
}

module.exports = { simulateGame }