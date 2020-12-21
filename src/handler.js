module.exports =
{
    HandleBots: async function (msg)
    {
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
        // Mee6 bot
        if (msg.author.username === "MEE6" && msg.author.discriminator === "4876")
        {
            return;
        }

        ConsoleError('user', msg.author.username)
    }
}

// Helper Functions
function ConsoleError(type, user)
{
    console.log(`No handler for ${type} ${user}!`)
}