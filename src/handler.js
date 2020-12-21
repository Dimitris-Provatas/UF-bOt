module.exports =
{
    HandleBots: async function (msg)
    {
        // Ignore self
        if (msg.author.username === "UF-bot" && msg.author.discriminator === "0466") return;

        // Mee6 bot
        if (msg.author.username === "MEE6" && msg.author.discriminator === "4876")
        {
            await msg.react('🖕');
            return;
        }

        ConsoleError('bot', msg.author.username)
    },
    HandleHumans: async function (msg)
    {
        let curseChance = 5;
        if (dickheads.includes(msg.author.username)) curseChance = 80;

        // Βρίζει μάνες
        if (Math.floor(Math.random() * 101) > curseChance)
        {
            const curse = `${msg.author}${GetCurse()}`;
            await msg.channel.send(curse);
            return;
        }

        ConsoleError('user', msg.author.username)
    }
}

// Helper Functions
const dickheads = [
    "ShEkIrO",
    "Daddy Gelt",
    "✪𝔉𝔲𝔯𝔦𝔬𝔲S✪",
    "OddCoin",
    "ʙᴇʏᴏɴᴅᴛʜᴇᴍᴀᴄʜ1ɴ3",
];

const curses = [
    ", άντε γαμήσου ρε μαλάκα!",
    ", ΡΕ ΦΥΓΕ ΡΕ ΜΑΛΑΚΑ ΑΠΟ ΔΩ ΡΕ ΜΠΡΟ!",
    ", δεν έχεις κάποιου άλλου της μπάλες να σπάσεις;",
    ", οι λέξεις δεν πονάνε όσο η κλωτσιά μου. Τώρα σκάσε",
    ", τα σκαμπο μου ΚΑΙ ΤΑ ΑΡΧΙΔΙΑ ΜΟΥ!",
];

function ConsoleError(type, user)
{
    console.log(`No handler for ${type} ${user}!`)
}

function GetCurse()
{
    return curses[Math.floor(Math.random() * curses.length)];
}
