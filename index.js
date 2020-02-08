const Discord = require('discord.js');
const config = require('./config.js');
const Enmap = require('enmap');
const fs = require('fs');

const bot = new Discord.Client();
bot.config = config;

//Reads the /events/ folder and attaches each event file to the appropriate event
//  file name MUST match an event
fs.readdir('./events/', (err, files) => {
    if(err) return console.error(err);

    files.forEach(file => {
        const event = require('./events/' + file);
        let eventName = file.split('.')[0];
        bot.on(eventName, event.bind(null, bot));
    });
});

bot.commands = new Enmap();
fs.readdir('./commands/', (err, files) => {
    if(err) return console.error(err);
    
    files.forEach(file => {
        let props = require('./commands/' + file);
        let commandName = file.split('.')[0];
        bot.commands.set(commandName, props);
    });
});

bot.login(config.token);