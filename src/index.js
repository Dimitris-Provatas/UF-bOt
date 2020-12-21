require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const handler = require('./handler');

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', async message =>
{
    if (message.author.bot)
        await handler.HandleBots(message);
    else
        await handler.HandleHumans(message);
});