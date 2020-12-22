module.exports =
{
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
        else ConsoleError('bot', msg.author.username, msg.channel.name)
    },
    HandleHumans: async function (bot, msg)
    {
        // suggestions
        if (msg.content.includes("!suggestion"))
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
        else
        {
            // ποσο - τοσο joke
            if (msg.content.includes("πόσο") || msg.content.includes("ποσο") || msg.content.includes("Πόσο") || msg.content.includes("Ποσο") || msg.content.includes("ΠΟΣΟ")
                || msg.content.includes("poso") || msg.content.includes("Poso") || msg.content.includes("POSO"))
            {
                await msg.channel.send(`${msg.author} ΤΟΣΟ 1-0! ΒΟΥΛΩΝΕ ΤΩΡΑ!`);
                return;
            }
            else if (msg.content.includes("πόσα") || msg.content.includes("ποσα") || msg.content.includes("Πόσα") || msg.content.includes("Ποσα") || msg.content.includes("ΠΟΣΑ")
                || msg.content.includes("posa") || msg.content.includes("Posa") || msg.content.includes("POSA"))
            {
                await msg.channel.send(`${msg.author} ΤΟΣΑ 1-0! ΒΟΥΛΩΝΕ ΤΩΡΑ!`);
                return;
            }
            // Βρίζει μάνες
            else
            {
                let curseChance = 95;
                if (dickheads.includes(msg.author.username)) curseChance = 85;
                const roll = Math.floor(Math.random() * 101);
                console.error(`Roll: ${msg.author.username} ${msg.channel.name} ${roll}`);

                if (roll > curseChance)
                {
                    let curse = GetCurse();
                    curse = curse.replace("name", msg.author);
                    await msg.channel.send(curse);
                    return;
                }
            }
        }
        
        ConsoleError('user', msg.author.username, msg.channel.name)
    }
}

// Helper Functions
const fs = require('fs');
const suggestionsFile = "./src/suggestions.txt";

const dickheads = [
    "ShEkIrO",
    "Daddy Gelt",
    "✪𝔉𝔲𝔯𝔦𝔬𝔲S✪",
    "ʙᴇʏᴏɴᴅᴛʜᴇᴍᴀᴄʜ1ɴ3",
    "𝓢𝓽𝓮𝓵𝓲𝓸𝓢",
    "𝓗𝓮𝓵𝓵𝓯𝓪𝓵𝓵𝓮𝓷",
    "StaikoChan",
];

const curses = [
    "name, άντε γαμήσου ρε μαλάκα!",
    "name, ΡΕ ΦΥΓΕ ΡΕ ΜΑΛΑΚΑ ΑΠΟ ΔΩ ΡΕ ΜΠΡΟ!",
    "name, δεν έχεις κάποιου άλλου της μπάλες να σπάσεις;",
    "name, οι λέξεις δεν πονάνε όσο η κλωτσιά μου. Τώρα σκάσε!",
    "name, τα σκαμπο μου ΚΑΙ ΤΑ ΑΡΧΙΔΙΑ ΜΟΥ!",
    "name, το ξέρω ότι οι γονείς σου δεν σε αγαπάνε, αλλά δεν χρειάζεται να το βγάζεις σε εμάς...",
    "name, ο Χίτλερ είχε καλύτερες απόψεις από εσένα νέγρε.",
    "name, με αυτά που λες, πώς να μην σε κυνηγάνε με παντόφλα;",
    "name, ελπίζω τα Χριστούγεννα να σου φέρει ο Αϊ Βασίλης εγκέφαλο!",
    "name , η θεωρία της σχετικότητας μάλλον περιστρέφεται γύρω από την μαύρη τρύπα που έχεις για εγκέφαλο!",
    "name, ΠΩΩΩΩΩΩΩΩ, τι είπες πάλι ρε καμπουρογαμόσαυρε;",
    "name , φωτιά στον κώλο σου και ακόμα παραπέρα!",
    "name , αν το ξαναπείς αυτό θα σου μπιπ το τρίκι τρίκι!",
    "name , είναι 8; Γιατί της μάνας σου τον προυκτό!",
    "name, μακάρι να σε έκανε ban ο Μπάμπης μετά από αυτό.",
    "name , ΣΟΥ ΕΎΧΟΜΑΙ ΝΑ ΣΕ ΚΆΝΟΥΝ ΌΛΟΙ REPORT!",
    "name, is time for your pee pee poo poo check.",
    "name , το μόνο flawless που θα βγάλεις θα είναι το server ban με αυτά που βλέπω.",
];

function ConsoleError(type, user, channel)
{
    console.log(`No action taken for ${type} ${user} in channel \'${channel}\'!`)
}

function GetCurse()
{
    return curses[Math.floor(Math.random() * curses.length)];
}

function Suggestion(suggestion, author)
{
    fs.appendFile(suggestionsFile, `O ${author} προτίνει: ${suggestion}\r\n`, function (err)
    {
        if (err) return console.log(err);
        console.log(`${suggestion} > ${suggestionsFile}`);
    });
}
