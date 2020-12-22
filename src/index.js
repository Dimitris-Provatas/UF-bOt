const fs = require('fs');
const secrets = JSON.parse(fs.readFileSync('./src/secrets.json'));
const Discord = require('discord.js');
const bot = new Discord.Client();

const handler = require('./handler');

bot.login(secrets.token);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', async message =>
{
    if (
        // General commands
        message.channel.name.includes("music") ||
        // Welcome
        message.channel.name === "welcome" ||
        message.channel.name === "rules" ||
        message.channel.name === "lifo-news" ||
        // All chats
        message.channel.name === "roles-channel" ||
        message.channel.name === "free-games" ||
        // Destiny
        message.channel.name === "event-creating" ||
        message.channel.name === "event-announcement"
    )
    return;

    if (message.author.bot)
        await handler.HandleBots(bot, message);
    else
        await handler.HandleHumans(bot, message);
});