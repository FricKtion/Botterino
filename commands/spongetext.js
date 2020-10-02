exports.run = (client, message, args) => {
    var spongedText = '';
    var unSponged = args.join(' ').toString().toLowerCase();

    for(var i = 0; i < unSponged.length; i++) {
        spongedText += (i%2) ? unSponged[i] : unSponged[i].toString().toUpperCase();
    }

    message.delete();
    message.channel.send(spongedText);
}