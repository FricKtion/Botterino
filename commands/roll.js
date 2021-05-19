const { MessageManager } = require("discord.js");

exports.run = (client, message, args) => {
    let re = /\d+d\d+/  //Regular Expression

    if(re.test(args[0])) {
        var index = args[0].indexOf('d');
        var numDice = -1
        var dieSize = -1;

        numDice = args[0].slice(0, index);
        dieSize = args[0].slice(index + 1, args[0].length);

        if(numDice > 0 && dieSize > 0 && numDice <= 100000) {
            var min = 1;
            var max = Math.floor(dieSize) + 1;
            var roll = 0;
            
            for(i = 0; i < numDice; i++) {
                roll += Math.floor(Math.random() * (max - min)) + min;
            }
            
            if(roll == numDice) {
                message.channel.send(`<:Sadge:827976333295747133> You rolled: ${roll}`);
            }
            else if(roll == (numDice * dieSize)) {
                message.channel.send(`<:HYPERS:827976721147232266> You rolled: ${roll}`);
            }
            else {
                message.channel.send(`:game_die: You rolled: ${roll}`)
            }
        }
        else {
            message.channel.send(`Nah, I'm good.`);
        }
    }
    else {
        message.channel.send(`"${args[0]}" didn't work. Try doing it right next time.`);
    }
}