// code your solution here
function saturdayFun(verb = 'roller-skate'){
    return `This Saturday, I want to ${verb}!`;
}

const mondayWork = function (action = 'go to the office') {
    return`This Monday, I will ${action}.`
}

function wrapAdjective (phrase="*") {
    return function(word = "special"){
        return `You are ${phrase}${word}${phrase}!`
    }
}