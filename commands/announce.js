const config = require('../config.js');

exports.run = (client, message, args) => {
    if(message.channel.type == "dm"){
        if(args[0] === config.announceKey) {
            args.splice(0,1);
            // TODO - this is copied/pasted, put it in a file somewhere
            //===========================================================================
            var channels = [];
            client.guilds.cache.forEach((guild) => {
                // TODO - should absolutely put some better error handling in here, a number of different issues could arise
                var targetChannel = guild.channels.cache.filter(x => x.name === "yung-gawblins" || x. name === "general");

                channels.push(...targetChannel);
            });

            for(var i = 0; i < channels.length; i++) {
                // TODO - again, some error handling here would be good
                console.log(`i: ${i}`);
                console.log(`Channel Name: ${channels[i][1].name}`);
                channels[i][1].send(args.join(' ').toString());
            }
            //===========================================================================
        }
        else{
            message.author.send("Authentication Failed...");
        }
    }
}