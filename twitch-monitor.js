// Thanks to roydejong on github for most of this code:
//  https://github.com/roydejong/timbot

const TwitchApi = require('./twitch-api');

class TwitchMonitor {

    static start(discordBot) {
        setInterval(() =>  {
            this.refresh(discordBot);
        }, 15000)
    }

    static refresh(discordBot) {
        console.log("Checking Twitch for T1's status now...");

        TwitchApi.fetchStream("loltyler1")
        .then((channel) => {
            if(channel.length > 0 && channel[0].type === "live") {
                console.log("Live");

                if(!TwitchMonitor.Live) {
                    this.LiveNotification = channel[0].title;

                    var channels = [];
                    discordBot.guilds.cache.forEach((guild) => {
                        // TODO - should absolutely put some better error handling in here, a number of different issues could arise
                        var targetChannel = guild.channels.cache.find(x => x.name === "yung-gawblins" || x.name === "general");
                        channels.push(targetChannel);
                    });

                    for(var i = 0; i < channels.length; i++) {
                        // TODO - again, some error handling here would be good
                        channels[i].send(this.LiveNotification);
                    }

                    this.Live = true;
                }
                    
            }
            else {
                console.log("Not Live");
                this.Live = false;
            }
        })
        .catch((err) => {
            console.log(err);
            console.log("Error trying to fetch T1's channel from Twitch...");
        });
    }
}

TwitchMonitor.Live = false;
TwitchMonitor.LiveNotification = "";

module.exports = TwitchMonitor;