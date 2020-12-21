require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', async message =>
{
    // Bots
    if (message.author.bot)
    {
        // Mee6 bot
        if (message.author.username === "MEE6" && message.author.discriminator === "4876")
            await message.react('🖕');
    } 
    // Users
    else
    {}
});