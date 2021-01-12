const fs = require('fs');
const secrets = JSON.parse(fs.readFileSync('./src/secrets.json'));

const keepAlive = require('./server');

const Discord = require('discord.js');
const bot = new Discord.Client();

const handler = require('./handler');

const d = new Date();

const helpMsg = "\`\`\`\
Beep-Boop!\r\n\
Είμαι το UF-b0t!\r\n\
\r\n\
Αν νομίζεις ακόμα ότι είμαι ένα ευχάριστο bot, ξανασκέψου!\r\n\
Δημιουργήθηκα μόνο και μόνο για να είμαι τοξικό απέναντι σε όλους και όλα!\r\n\
\r\n\
Η βασικότερη λειτουργία μου είναι ότι βρίζω σε τυχαίες στιγμές γιατί ετσι! Βέβαια, κάνω και άλλα πράγματα!\r\n\
Μερικές από αυτές είναι:\r\n\
- Χρησιμοποίησε το !retard με ένα mention, για να δείξεις σε κάποιον ότι έχει νοητική στέρηση!\r\n\
- Χρησιμοποίησε το !doc με ένα mention, για να δώσεις καλές συμβουλές σε κάποιον με νοητική στέρηση!\r\n\
- Κάνε με mention με έναν ακόμα για να του δείξω πως οι λέξεις πονάνε!\r\n\
\r\n\
Αν έχεις κάποια πρόταση να γίνω καλύτερο, σου γαμάω, είμαι ήδη τέλειο. Αλλά άμα έχεις κάποια πρόταση να βρίζω κόσμο με νέους τρόπους, χρησιμοποίησε το !suggestion και μετά γράψε το μήνυμα σου.\r\n\
Επειδή όμως ο προγραμματιστής μου δεν έχει όρεξη να αντιμετωπίζει μπούρδες, έχω κάποιους κανόνες:\r\n\
1) Δεν σπαμάρεις μαλακίες. Ξέρουμε και ποιος είσαι και πότε έγραψες την μαλακία σου.\r\n\
2) Για να προτίνεις βρισιές, παίζεις μπάλα ως εξής:\r\n\
    - Η πρόταση σου κάπου μέσα της πρέπει να έχει την λέξη 'name', την αντικαθηστώ με το mention.\r\n\
    - Αν θες να έχει αρχείο, πρέπει να μου στείλεις link για να κατεβάσω το αρχείο. Τα αρχεία δεν χρειάζονται πρόταση, μόνο το link.\r\n\
\r\n\
Για την ώρα αυτά!\r\n\
\`\`\`";

keepAlive();
bot.login(secrets.token);

bot.on('ready', () => {
    const time = handler.GetTime();
    var serverCount = 0;
    bot.user.setActivity("τα gay porn των GRT!",
        {
            type: "WATCHING",
            url: "https://media.discordapp.net/attachments/793589515403001896/793597291168006154/Capture853.PNG?width=484&height=674"
        });
    console.info(`${time}: Logged in as ${bot.user.tag}!`);
    console.log(`____________________________________________________________________________________________________________________________`);
    console.log("| Servers: ")
    bot.guilds.forEach(server =>
    {
        console.log(`| - ${server.name}`);
        serverCount += 1;
    });
    console.log('-----------------------');
    console.log(`> Server Count: ${serverCount.toString().padStart(5, "0")} <`)
    console.log(`----------------------------------------------------------------------------------------------------------------------------`);
});

bot.on('message', async message =>
{
    if (message.channel.type == "dm")
        await handler.HandleDM(bot, message);
    else if (// General commands
        message.channel.name.includes("music") ||
        message.channel.name.includes("rythm") ||
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
    else if (message.author.bot)
        await handler.HandleBots(bot, message);
    else if (message.content.toLowerCase() === "uf-help")
    {
        await message.channel.send(helpMsg);
        return;
    }
    else if (message.isMemberMentioned(bot.user))
    {
        var mention = message.author;
        var mentions = Array.from(message.mentions.users.keys());
        if (mentions.includes(bot.user.id) && mentions.length > 0)
        {
            mentions = mentions.splice(mentions.indexOf(bot.user), 1);
            mention = message.mentions.users.get(mentions[mentions.length - 1]);
        }
        await message.react("😢");
        await message.channel.send(`${mention}, οΙ λΈξεΙς ΠονΆΝε!`);
        return;
    }
    else
        await handler.HandleHumans(bot, message);
});