// Thanks to roydejong on github for most of this code:
//  https://github.com/roydejong/timbot

const axios = require('axios');
const config = require('./config.js');

class TwitchApi {
    static get baseRequest() {
        return {
            baseURL: "https://api.twitch.tv/helix/",
            headers: {
                "Client-ID": config.twitchClientId,
                "Authorization": `Bearer ${config.twitchAuthToken}`
            }
        };
    }

    static fetchStream(channelName) {
        return new Promise((resolve, reject) => {
            axios.get(`/streams?user_login=${channelName}`, this.baseRequest)
                .then((res) => {
                    resolve(res.data.data || []);
                })
                .catch((err) => {
                    console.log(`Twitch API Failure: ${err.message}`);
                    reject(err);
                });
        });
    }
}

module.exports = TwitchApi;