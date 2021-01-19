const fs = require('fs');
const secrets = JSON.parse(fs.readFileSync('./src/secrets.json'));

const keepAlive = require('./server');

const Discord = require('discord.js');
const bot = new Discord.Client();

const handler = require('./handler');

bot.login(secrets.token).then(
    () => {},
    error => { console.log(error); }
);

bot.on('ready', () => {
    const time = handler.GetTime();
    bot.user.setActivity("τα gay porn των GRT!",
    {
        type: "WATCHING",
    });
    keepAlive();
    console.info(`${time}: Logged in as ${bot.user.tag}!`);
    console.log(`__________________________________________________`);
    console.log(`| Server Count: ${bot.guilds.size - 1}`.padEnd(49, " ") + '|');
    console.log('+------------------------------------------------+');
    console.log("| Servers: ".padEnd(49, " ") + "|");
    bot.guilds.forEach(server =>
    {
        if (server.name === "Bot Test") return;

        const serverName = `| - ${server.name}`.padEnd(49, " ") + "|";
    });
    console.log('+------------------------------------------------+');
});

bot.on('message', async message =>
{
    // console.log(message.content);
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
    else if (message.content.toLowerCase() === "uf-help" || message.content.toLowerCase() === "uf-help hide")
    {
        if (message.content.toLowerCase().includes('hide'))
            await message.delete(1);

        await message.channel.send(helpMsg);
        return;
    }
    else if (message.isMemberMentioned(bot.user))
    {
        var mention = message.author;
        var mentions = Array.from(message.mentions.users.keys());
        while (mentions.includes(bot.user.id))
        {
            if (mentions.length === 1)
                mentions = [];
            else
                mentions = mentions.splice(mentions.indexOf(bot.user.id) - 1, 1);


            if (mentions.length > 0)
                mention = message.mentions.users.get(mentions[mentions.length - 1]);
            else
                mention = message.author;
        }
        await message.react("😢");
        await message.channel.send(`${mention}, οΙ λΈξεΙς ΠονΆΝε!`);
        return;
    }
    else
        await handler.HandleHumans(bot, message);
});


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
- Στείλε μου PM, ποτέ δεν ξέρεις ;)\r\n\
\r\n\
Αν έχεις κάποια πρόταση να γίνω καλύτερο, σου γαμάω, είμαι ήδη τέλειο. Αλλά άμα έχεις κάποια πρόταση να βρίζω κόσμο με νέους τρόπους, χρησιμοποίησε το !suggestion και μετά γράψε το μήνυμα σου.\r\n\
Επειδή όμως ο προγραμματιστής μου δεν έχει όρεξη να αντιμετωπίζει μπούρδες, έχω κάποιους κανόνες:\r\n\
1) Δεν σπαμάρεις μαλακίες. Ξέρουμε και ποιος είσαι και πότε έγραψες την μαλακία σου, οπότε εύκολα δεν σου επιτρέπουμε να ξαναγράψεις.\r\n\
2) Για να προτίνεις βρισιές, παίζεις μπάλα ως εξής:\r\n\
    - Η πρόταση σου κάπου μέσα της πρέπει να έχει την λέξη 'name', την αντικαθηστώ με το mention.\r\n\
    - Αν θες να έχει αρχείο, πρέπει να μου στείλεις link για να κατεβάσω το αρχείο. Τα αρχεία δεν χρειάζονται πρόταση, μόνο το link.\r\n\
\r\n\
Για την ώρα αυτά!\r\n\
\`\`\`";