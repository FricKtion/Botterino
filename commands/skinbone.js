exports.run = (client, message, args) => {
    if(message.guild.available){
        message.guild.members.cache.forEach(curUser => {
            if(curUser.user.id === '209830312249786368') {
                message.channel.send("<@" + curUser.user.id + ">");
            }
        });
    }

    message.channel.send('https://www.youtube.com/watch?v=tesr1OyymXo');
}
