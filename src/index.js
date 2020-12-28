const fs = require('fs');
const secrets = JSON.parse(fs.readFileSync('./src/secrets.json'));

const keepAlive = require('./server');

const Discord = require('discord.js');
const bot = new Discord.Client();

const handler = require('./handler');

const d = new Date();

keepAlive();
bot.login(secrets.token);

bot.on('ready', () => {
    const time = handler.GetTime();
    console.info(`${time}: Logged in as ${bot.user.tag}!`);
    console.log(`----------------------------------------------------------------------------------------------------------------------------`);
});

bot.on('message', async message =>
{
    if (// General commands
        message.channel.name.includes("music") ||
        message.channel.name === "moderators" ||
        // Welcome
        message.channel.name === "welcome" ||
        message.channel.name === "rules" ||
        message.channel.name === "lifo-news" ||
        // All chats
        message.channel.name === "roles-channel" ||
        message.channel.name === "free-games" ||
        // Destiny
        message.channel.name === "event-creating" ||
        message.channel.name === "event-announcement" ||
        message.channel.name === "cheese-videos" ||
        // Warframe
        message.channel.name === "mandachord"
        ) 
        return;
    else if (message.isMemberMentioned(bot.user))
    {
        let mention = message.author;
        if (message.mentions.users.size > 1)
            mention = message.mentions.users.get(Array.from(message.mentions.users.keys())[1]);
        await message.react("😢");
        await message.channel.send(`${mention}, οΙ λΈξεΙς ΠονΆΝε!`);
        return;
    }
    else if (message.author.bot)
        await handler.HandleBots(bot, message);
    else
        await handler.HandleHumans(bot, message);
});