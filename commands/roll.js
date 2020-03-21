exports.run = (client, message, args) => {
    let re = /\d+d\d+/  //Regular Expression

    if(re.test(args[0])) {
        var index = args[0].indexOf('d');
        var numDice = args[0].slice(0, index);
        var dieSize = args[0].slice(index + 1, args[0].length);

        var min = 1;
        var max = Math.floor(dieSize) + 1;
        var roll = 0;
        
        for(i = 0; i < numDice; i++) {
            roll += Math.floor(Math.random() * (max - min)) + min;
        }
        
        if(roll == numDice) {
            message.channel.send(`<:PepeHands:533510033015701505> You rolled: ${roll}`);
        }
        else if(roll == (numDice * dieSize)) {
            message.channel.send(`:ezChamp: You rolled: ${roll}`);
        }
        else {
            message.channel.send(`:game_die: You rolled: ${roll}`)
        }
    }
    else {
        message.channel.send(`"${args[0]}" didn't work. Try doing it right next time.`);
    }
}
