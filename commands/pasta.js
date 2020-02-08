exports.run = (client, message, args) => {
    const fetch = require('node-fetch');

    fetch('http://www.reddit.com/r/copypasta/random.json?limit=1')
    .then(response => response.json())
    .then(response => {
        message.channel.send(response[0].data.children[0].data.selftext)
        .catch(err => {
            message.channel.send("Pasta was undercooked. Try again.")
        })
    });
};