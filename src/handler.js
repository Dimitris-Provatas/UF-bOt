module.exports =
{
    GetTime: function () {
        return GetTime();
    },
    HandleBots: async function (bot, msg)
    {
        // Ignore self
        if (msg.author.username === "UF-bOt" && msg.author.discriminator === "0466")
        {
            await msg.react("🔥");
            return;
        }
        // Mee6 bot
        else if (msg.author.username === "MEE6" && msg.author.discriminator === "4876")
        {
            // middle finger
            await msg.react('🖕');
            // n word
            await msg.react("🇳");
            await msg.react("🇮");
            await msg.react(bot.emojis.get("790893367503749130"));
            await msg.react("🇬");
            await msg.react("🇦");
            return;
        }
        // // Dank Memer
        // else if (msg.author.username === "Dank Memer" && msg.author.discriminator === "5192")
        // {
        //     await msg.react("👌");
        //     await msg.react("🇩");
        //     await msg.react("🇦");
        //     await msg.react("🇳");
        //     await msg.react("🇰");
        //     await msg.react("💯");
        //     return;
        // }
        else ConsoleError('bot', msg.author.username, msg.channel.name)
    },
    HandleHumans: async function (bot, msg)
    {
        if (msg.content.split(" ")[0].includes("!suggestion"))
        {
            if (!msg.content.includes("!suggestion "))
                msg.channel.send(`Να σου πω ρε τόλη ${msg.author}, ψήνεσαι να προτίνεις κάτι;`);
            else
            {
                await Suggestion(msg.content.split("!suggestion ")[1], msg.author.username);
                await msg.channel.send(`Έγινε φίλε ${msg.author}, η πρότασή σου καταχωρήθηκε!`);
            }

            return;
        }
        else if (msg.content.split(" ")[0].includes("!doc"))
        {
            await HandleDoctor(msg, bot).then(() => { return; });
        }
        // handle lfg
        else if (msg.channel.name.includes("looking-for-guardians") && msg.content.includes("<@&768383690560241684>"))
            await HandleLFG(msg).then(
                () => { return; },
                () => 
                {
                    console.log(`The same dude sent to LFG chat. Dude was ${msg.author.username}.`);
                    return;
                }
            );
        // suggestions
        else
        {
            // Link check
            // Deny links and emojis
            // Any message that must not be a link to be proccessed
            if (!msg.content.includes("http") && !msg.content.includes("<:") && !msg.content.includes("<@"))
            {
                // τρια
                if (
                    !msg.content.includes(":3") &&
                    (
                        msg.content.includes("3") || msg.content.includes(" τρια ") || msg.content.includes(" τρία ") ||
                        msg.content.includes("Τρια ") || msg.content.includes("ΤΡΙΑ") ||
                        msg.content.includes("tria ") || msg.content.includes("Tria ") || msg.content.includes("TRIA")
                    )
                    )
                {
                    await msg.channel.send(`${msg.author} ΤΡΙΑ; ΝΑ ΤΑ ΦΑΣ ΚΑΙ ΝΑ ΕΙΝΑΙ ΚΡΥΑ!`);
                    return;
                }
                // τρεις
                else if (
                    msg.content.includes(" τρεις") || msg.content.includes("Τρεις") || msg.content.includes("ΤΡΕΙΣ") ||
                    msg.content.includes(" τρεισ") || msg.content.includes("Τρεισ") || msg.content.includes("ΤΡΕΙς") ||
                    msg.content.includes(" treis") || msg.content.includes("Treis") || msg.content.includes("TREIS") ||
                    msg.content.includes(" tris") || msg.content.includes("Tris") || msg.content.includes("TRIS")
                    )
                {
                    const woah = await bot.emojis.get("786165881038307358");
                    await msg.channel.send(`${msg.author} ΤΡΕΙΣ ΝΑ ΕΙΝΑΙ ΟΙ ΩΡΕΣ ΣΟΥ! ${woah}`);
                    return;
                }
                // οκτω 
                else if (
                    msg.content.includes("8") ||
                    msg.content.includes(" οκτω") || msg.content.includes(" οκτώ") || msg.content.includes(" οχτω") || msg.content.includes(" οχτώ") ||
                    msg.content.includes("Οκτω") || msg.content.includes("Οκτώ") || msg.content.includes("ΟΚΤΩ") ||
                    msg.content.includes("Οχτω") || msg.content.includes("Οχτώ") || msg.content.includes("ΟΧΤΩ") ||
                    msg.content.includes(" okto") || msg.content.includes("Okto") || msg.content.includes("OKTO")
                    )
                {
                    await msg.channel.send(`${msg.author} ΟΥΧΤΟ; ΤΗΣ ΜΑΝΑΣ ΤΟΝ ΠΡΟΥΧΤΟ!`);
                    return;
                }
            }

            // Allow links and emojis
            // ποσο - τοσο joke
            if (
                msg.content.includes(" πόσο ") || msg.content.includes(" ποσο ") || msg.content.includes("Πόσο ") || msg.content.includes("Ποσο ") || msg.content.includes(" ΠΟΣΟ ")
                || msg.content.includes(" poso ") || msg.content.includes("Poso ") || msg.content.includes(" POSO ")
                )
            {
                await msg.channel.send(`${msg.author} ΤΟΣΟ 1-0! ΒΟΥΛΩΝΕ ΤΩΡΑ!`);
                return;
            }
            // ποσα - τοσα joke
            else if (
                msg.content.includes(" πόσα ") || msg.content.includes(" ποσα ") || msg.content.includes("Πόσα ") || msg.content.includes("Ποσα ") || msg.content.includes(" ΠΟΣΑ ")
                || msg.content.includes(" posa ") || msg.content.includes("Posa ") || msg.content.includes(" POSA ")
                )
            {
                await msg.channel.send(`${msg.author} ΤΟΣΑ 1-0! ΒΟΥΛΩΝΕ ΤΩΡΑ!`);
                return;
            }
            // ποιος - αυτος joke
            else if (
                msg.content.includes("ΠΟΙΟΣ") ||
                msg.content.includes(" ποιος") || msg.content.includes(" ποίος") || msg.content.includes(" ποιός") ||
                msg.content.includes(" ποιοσ") || msg.content.includes(" ποίοσ") || msg.content.includes(" ποιόσ") ||
                msg.content.includes("Ποιος") || msg.content.includes("Ποίος") || msg.content.includes("Ποιός") ||
                msg.content.includes("Ποιοσ") || msg.content.includes("Ποίοσ") || msg.content.includes("Ποιόσ") ||
                msg.content.includes(" poios") || msg.content.includes("Poios") || msg.content.includes("POIOS")
                )
            {
                await msg.channel.send(`${msg.author} ΑΥΤΟΣ 1-0! ΒΟΥΛΩΝΕ ΤΩΡΑ!`);
                return;
            }
            // ποια - αυτη joke
            else if (
                msg.content.includes("ΠΟΙΑ") ||
                msg.content.includes(" ποια") || msg.content.includes(" ποία") || msg.content.includes(" ποιά") ||
                msg.content.includes(" Ποια") || msg.content.includes("Ποία") || msg.content.includes("Ποιά") ||
                msg.content.includes(" poia") || msg.content.includes("Poia") || msg.content.includes("POIA")
                )
            {
                await msg.channel.send(`${msg.author} ΑΥΤΗ 1-0! ΒΟΥΛΩΝΕ ΤΩΡΑ!`);
                return;
            }
            // ποιο - αυτο joke
            else if (
                msg.content.includes("ΠΟΙΟ") ||
                msg.content.includes(" ποιο") || msg.content.includes(" ποίο") || msg.content.includes(" ποιό") ||
                msg.content.includes("Ποιο") || msg.content.includes("Ποίο") || msg.content.includes("Ποιό") ||
                msg.content.includes(" poio") || msg.content.includes("Poio") || msg.content.includes("POIO")
                )
            {
                await msg.channel.send(`${msg.author} ΑΥΤΟ 1-0! ΒΟΥΛΩΝΕ ΤΩΡΑ!`);
                return;
            }
            // ποιοι - αυτος joke
            else if (
                msg.content.includes("ΠΟΙΟΙ") ||
                msg.content.includes(" ποιοι") || msg.content.includes(" ποίοι") || msg.content.includes(" ποιοί") ||
                msg.content.includes("Ποιοι") || msg.content.includes("Ποίοι") || msg.content.includes("Ποιοί") ||
                msg.content.includes(" poioi") || msg.content.includes("Poioi") || msg.content.includes("POIOI")
                )
            {
                await msg.channel.send(`${msg.author} ΑΥΤΟΙ 1-0! ΒΟΥΛΩΝΕ ΤΩΡΑ!`);
                return;
            }
            // ποιες - αυτη joke
            else if (
                msg.content.includes("ΠΟΙΕΣ") ||
                msg.content.includes(" ποιες") || msg.content.includes(" ποίες") || msg.content.includes(" ποιές") ||
                msg.content.includes(" ποιεσ") || msg.content.includes(" ποίεσ") || msg.content.includes(" ποιέσ") ||
                msg.content.includes("Ποιες") || msg.content.includes("Ποίες") || msg.content.includes("Ποιές") ||
                msg.content.includes("Ποιεσ") || msg.content.includes("Ποίεσ") || msg.content.includes("Ποιέσ") ||
                msg.content.includes(" poies") || msg.content.includes("Poies") || msg.content.includes("POIES")
                )
            {
                await msg.channel.send(`${msg.author} ΑΥΤΕΣ 1-0! ΒΟΥΛΩΝΕ ΤΩΡΑ!`);
                return;
            }
            // woah react
            else if (msg.content.includes("<:woah:786165881038307358>"))
            {
                await msg.react(bot.emojis.get("786165881038307358"));
                return;
            }
            // Βρίζει μάνες
            else
                await CurseEverything(msg).then(
                    () => { return; },  // resolve
                    () => { console.log("Roll not high enough!"); }  // reject
                );
        }
        
        ConsoleError('user', msg.author.username, msg.channel.name)
    }
}

// Helper Functions
let lastLFGSender;
const d = new Date();
const fs = require('fs');
const suggestionsFile = "./src/suggestions.txt";

const dickheads = [
    "Daddy Gelt",
    "✪𝔉𝔲𝔯𝔦𝔬𝔲S✪",
    "𝓗𝓮𝓵𝓵𝓯𝓪𝓵𝓵𝓮𝓷",
    "StaikoChan",
    "The face of true Carnage",
    "𝘾𝙚𝙧𝙫𝙚𝙧𝙪𝙨𝙂𝙧",
    "ℂ𝔢ⓡν𝕖𝐫υรﻮ𝓻",
];

const curses = [
    // Απλά
    "name, άντε γαμήσου ρε μαλάκα!",
    "name, ΡΕ ΦΥΓΕ ΡΕ ΜΑΛΑΚΑ ΑΠΟ ΔΩ ΡΕ ΜΠΡΟ!",
    "name, δεν έχεις κάποιου άλλου τις μπάλες να σπάσεις;",
    "name, οι λέξεις δεν πονάνε όσο η κλωτσιά μου. Τώρα σκάσε!",
    "name, τα σκαμπο μου ΚΑΙ ΤΑ ΑΡΧΙΔΙΑ ΜΟΥ!",
    "name, το ξέρω ότι οι γονείς σου δεν σε αγαπάνε, αλλά δεν χρειάζεται να το βγάζεις σε εμάς...",
    "name, ο Χίτλερ είχε καλύτερες απόψεις από εσένα νέγρε.",
    "name, με αυτά που λες, πώς να μην σε κυνηγάνε με παντόφλα;",
    "name, ελπίζω τα Χριστούγεννα να σου φέρει ο Αϊ Βασίλης εγκέφαλο!",
    "name, η θεωρία της σχετικότητας μάλλον περιστρέφεται γύρω από την μαύρη τρύπα που έχεις για εγκέφαλο!",
    "name, ΠΩΩΩΩΩΩΩΩ, τι είπες πάλι ρε καμπουρογαμόσαυρε;",
    "name, φωτιά στον κώλο σου και ακόμα παραπέρα!",
    "name, αν το ξαναπείς αυτό θα σου μπιπ το τρίκι τρίκι!",
    "name, μακάρι να σε κάνουν ban μετά από αυτό.",
    "name, ΣΟΥ ΕΎΧΟΜΑΙ ΝΑ ΣΕ ΚΆΝΟΥΝ ΌΛΟΙ REPORT!",
    "name, is time for your pee pee poo poo check.",
    "name, το μόνο flawless που θα βγάλεις θα είναι το server ban με αυτά που βλέπω.",
    "name, ΠΑΜ ΠΑΜ, ΕΠΑΘΕΣ AIDS! Γιατί να πάθουμε και εμείς με αυτά που λες;",
    "name, θα σε απελάσω σκουπίδι… Θα πας πίσω στα Τίρανα!",
    "name, για κάθε μαλακία που λες, ένα μικρό παχύσαρκο ανήλικο βιάζεται σεξουαλικά από τον αδερφό του!",
    "name, ok boomer!",
    "Για αυτό δεν σε αγαπάει η μάνα σου, name.",
    "name, είσαι στείρος!",
    "name, μάθε να κουνάς πιο γρήγορα το ποντίκι σου πρώτα!",
    "name, ξέρω ότι το dildo στον κώλο σου σε πονάει, ίσως θα σε ενδιέφεραι να αναβαθμίσεις σε ένα από αυτά: https://bad-dragon.com/",
    "name, ο Luke Smith έχει πει ηλίθια πράγματα, όπως το equipment sunset, το να φύγουν οι πλανήτες και να βγουν κάποιες supers από το παιχνίδι. ΠΩΣ ΚΑΤΑΦΕΡΕΣ ΝΑ ΤΟΝ ΞΕΠΕΡΑΣΕΙΣ ΣΕ ΗΛΙΘΙΟΤΗΤΑ;",
    "name, δεν χρειάζεται να αναπληρώσεις το κενό που άφησε ο Shekiro.",
    "Σε όλους αρέσει να είναι Yu-Gi-Oh players, name, αλλά εσύ φτάνεις στο επίπεδο του Shekiro!",
    "Θα σε έλεγα κακό παίχτη, name, αλλά θα ήταν προσβολή στους κακούς παίχτες να τους υποβιβάσω στο επίπεδο του Shekiro!",
    "name, υπάρχει λόγος που το Vine πέθανε και αυτός είσαι εσύ!",

    // Videos
    "video stfu.mp4",
    "video ur_opinion_does_not_matter.mp4",
    "video not_funny.mp4",

    // Gifs
];

const retardURLs = [
    "",
    "",
    "",
    "",
    "",
    "",
];

function ConsoleError(type, user, channel)
{
    const time = GetTime();
    console.log(`${time}: No action taken for ${type} ${user} in channel \'${channel}\'!`);
    console.log(`----------------------------------------------------------------------------------------------------------------------------`);
}

function Suggestion(suggestion, author)
{
    const time = GetTime();
    fs.appendFile(suggestionsFile, `${time}: O ${author} προτίνει: ${suggestion}\r\n`, function (err)
    {
        if (err)
            console.log(err);
        else 
            console.log(`${time}: O ${author} έκανε μία πρότασή!`);

        console.log(`----------------------------------------------------------------------------------------------------------------------------`);
    });
}

function replaceAll(string, search, replace)
{
    return string.split(search).join(replace);
}

function GetTime()
{
    return replaceAll(d.toISOString().replace("T", " ").replace("Z", ""), "-", "/");
}

async function HandleLFG(msg)
{
    if (msg.author.username !== "UF-bOt" && msg.author.discriminator !== "0466" && msg.author.username !== lastLFGSender)
    {
        await msg.react("🍆");
        await msg.channel.send(`Τι λέει ${msg.author}, πάλι κουβάλημα θέλουμε;`);
        lastLFGSender = msg.author.username;
        console.log(`LastLFGSender: ${lastLFGSender}`);
        return Promise.resolve();
    }

    return Promise.reject();
}

async function HandleDoctor(msg, client)
{
    const mention = msg.mentions.users.first() || msg.author;
    const reply = `\
Γειά σου ${mention}!\r\n
- Σε περίπτωση που δεν βλέπεις καλά, επικοινώνησε με τον οφθαλμίατρο που προτείνουμε:\r\n**\`\`\`Γεώργιος Αυτισματίας\r\nΟδός: Μητρώς 69\r\nTηλέφωνο: 6969420666\`\`\`**\
- Σε περίπτωση που δεν έχεις εγκέφαλο, είσαι ευπρόσδεκτος σε αυτόν τον σέρβερ: https://discord.gg/cEcy53C\r\n
- Σε περίπτωση που ο παραπάνω σέρβερ δεν σε καλύπτει, προτείνουμε και αυτόν: https://discord.gg/KJwuW3jBSA\
        `;
    await msg.channel.send(reply);
    await msg.delete(1);
    return Promise.resolve();
}

async function HandleRetard(msg, client)
{
    const mention = msg.mentions.users.first();
    const reply = `My name is ${mention} and I'm retarded, dahhhhhh!`;
    await msg.channel.send(reply, {files: ['']});
    await msg.delete(1);
    return Promise.resolve();
}

async function CurseEverything(msg)
{
    let curseChance = 95;
    if (dickheads.includes(msg.author.username)) curseChance = 85;
    const roll = Math.floor(Math.random() * 101);
    await console.log(`Roll: ${msg.author.username} ${msg.channel.name} ${roll}`);

    if (roll > curseChance)
    {
        let curse = curses[Math.floor(Math.random() * curses.length)];
        if (curse.includes("name"))
        {
            curse = curse.replace("name", msg.author);
            await msg.channel.send(curse);
        }
        else if (curse.includes("video"))
        {
            const video = curse.split(" ")[1];
            curse = { files: [`./src/media/videos/${video}`] };
            await msg.channel.send(msg.author, curse);
        }
        else if (curse.includes("gif"))
        {
            const gif = curse.split(" ")[1];
            curse = { files: [`./src/media/gifs/${gif}.gif`] };
            await msg.channel.send(msg.author, curse);
        }
        else if (curse.includes("image"))
        {
            const image = curse.split(" ")[1];
            curse = { files: [`./src/media/images/${image}`] };
            await msg.channel.send(msg.author, curse);
        }

        return Promise.resolve();
    }

    return Promise.reject();
}