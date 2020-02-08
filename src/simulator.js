
function simulateGame(teamx, teamy) {
    while (teamx.side.nexus &&  teamy.side.nexus) {

        console.log(skillComparasionTopXTop(teamx, teamy));
        console.log(skillComparasionJunXJun(teamx, teamy));
        console.log(skillComparasionMidXMid(teamx, teamy));
        console.log(skillComparasionBotXBot(teamx, teamy));
        console.log(skillComparasionSupXSup(teamx, teamy));
        console.log(skillComparasionTopAndJunXTopAndJun(teamx, teamy));
        console.log(skillComparasionMidAndJunXMidAndJun(teamx, teamy));
        console.log(skillComparasionBotAndSupXBotAndSup(teamx, teamy));
        console.log(skillComparasionBotAndSupAndJunXBotAndSupAndJun(teamx, teamy));

        break;
    }
}

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

function skillComparasionBotAndSupXBotAndSup(teamx, teamy) {
    return teamx.botlaner.getSkill() + teamx.support.getSkill() > teamy.botlaner.getSkill() + teamy.support.getSkill()
}

function skillComparasionBotAndSupAndJunXBotAndSupAndJun(teamx, teamy) {
    return teamx.botlaner.getSkill() + teamx.support.getSkill() + teamx.jungler.getSkill() > teamy.botlaner.getSkill() + teamy.support.getSkill() + teamy.jungler.getSkill()
}

module.exports = { simulateGame }