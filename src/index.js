const fs = require('fs');
const secrets = JSON.parse(fs.readFileSync('./src/secrets.json'));

const keepAlive = require('./server');

const Discord = require('discord.js');
const bot = new Discord.Client();

const handler = require('./handler');

const d = new Date();

const helpMsg = "\`\`\`\
Beep-Boop! Είμαι το UF-b0t!\r\n\
Αν νομίζεις ακόμα ότι είμαι ένα ευχάριστο bot, ξανασκέψου!\r\n\
Δημιουργήθηκα μόνο και μόνο για να είμαι τοξικό απέναντι σε όλους και όλα!\r\n\
\r\n\
Η βασικότερη λειτουργία μου είναι ότι βρίζω σε τυχαίες στιγμές γιατί ετσι! Βέβαια, κάνω και άλλα πράγματα!\r\n\
\r\n\
Χρησιμοποίησε το !retard με ένα mention, για να δείξεις σε κάποιον ότι έχει νοητική στέρηση!\r\n\
Χρησιμοποίησε το !doc με ένα mention, για να δώσεις καλές συμβουλές σε κάποιον με νοητική στέρηση!\r\n\
Κάνε με mention με έναν ακόμα για να του δείξω πως οι λέξεις πονάνε!\r\n\
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
    bot.user.setActivity("τα gay porn των GRT!",
        {
            type: "WATCHING",
            url: "https://media.discordapp.net/attachments/793589515403001896/793597291168006154/Capture853.PNG?width=484&height=674"
        });
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
    else if (message.content.toLowerCase() === "uf-help")
    {
        await message.channel.send(helpMsg);
        return;
    }
    else if (message.author.bot)
        await handler.HandleBots(bot, message);
    else
        await handler.HandleHumans(bot, message);
});