const TwitchMonitor = require('../twitch-monitor');

module.exports = (client) => {
    console.log(`Logged in as: ${client.user.username} ${client.user.discriminator}`)

    TwitchMonitor.start(client);
};