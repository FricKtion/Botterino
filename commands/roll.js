exports.run = (client, message, args) => {
    let re = new RegExp('\d+d\d+');

    message.channel.send(args[0]);

    if(!re.test(args))
    var min = 1;
    var max = Math.floor(20);

    var roll = Math.floor(Math.random() * (max - min)) + min; 
}