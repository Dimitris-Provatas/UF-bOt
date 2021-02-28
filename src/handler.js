module.exports =
{
    GetTime: function () {
        return GetTime();
    },
    GetMentions: function (bot, msg) {
        return GetMentions(bot, msg);
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
        else ConsoleError('bot', msg.author.username, msg.guild, msg.channel.name)
    },
    HandleHumans: async function (bot, msg)
    {
        const message = msg.content.split(" ");

        // clear
        if (message[0].includes("uf-clear"))
        {
            const owner = msg.guild.roles.find(role => role.name === 'Server Owner');
            const mods = msg.guild.roles.find(role => role.name === 'Moderators');

            if (msg.member.roles.find(role => role.name === 'Server Owner') || msg.member.roles.find(role => role.name === 'Moderators'))
            {
                if (!message[1] || isNaN(message[1]))
                {
                    const reply = await msg.channel.send(`${msg.author} πρέπει να βάλεις και έναν αριθμό μετά, για να ξέρω πόσα να σβήσω (max: 100)!`);
                    await msg.delete(15000);
                    await reply.delete(1);
                }
                else
                {
                    await msg.delete(1);
                    const toDelete = await msg.channel.fetchMessages({limit: parseInt(message[1])});
                    await msg.channel.bulkDelete(toDelete);
                }
            }
            else
                msg.channel.send(`Έξυπνος φίλε ${msg.author}, θα ήταν κρίμα να μάθουν οι ${mods} και ο ${owner} ότι πήγες να κάνεις κάτι τέτοιο!`);

            return;
        }

        // woah react
        if (msg.content.includes("<:woah:786165881038307358>"))
            await msg.react(bot.emojis.get("786165881038307358"));
        // kekw react
        if (msg.content.includes("<:KEKW:772571192573296660>"))
            await msg.react(bot.emojis.get("772571192573296660"));
        // mara_ara react
        if (msg.content.includes("<:mara_ara:785904138290331688>"))
            await msg.react(bot.emojis.get("785904138290331688"));

        // suggestions
        if (msg.content.split(" ")[0].includes("!suggestion"))
        {
            if(noSuggestions.indexOf(msg.author.username) === -1)
            {
                if (!msg.content.includes("!suggestion "))
                    msg.channel.send(`Να σου πω ρε τόλη ${msg.author}, ψήνεσαι να προτίνεις κάτι;`);
                else
                {
                    await Suggestion(msg.content.split("!suggestion ")[1], msg.author.username, msg.guild);
                    await msg.channel.send(`Έγινε φίλε ${msg.author}, η πρότασή σου καταχωρήθηκε!`);
                }
            }
            else
                await msg.channel.send(`Όχι φίλε ${msg.author}, έχεις σπαμάρει τον κώλο σου και μας έσπασες τα νεύρα!\r\nΔεν έχεις δικαίωμα να ξαναπροτίνεις κάτι!`);

            return;
        }
        else if (msg.content.split(" ")[0].includes("!doc"))
        {
            await HandleDoctor(msg, bot).then(() => { return; });
            return;
        }
        else if (msg.content.split(" ")[0].includes("!retard"))
        {
            await HandleRetard(msg, bot).then(() => { return; });
            return;
        }
        else if (msg.content.split(" ")[0].includes("!reverse"))
        {
            await HandleReverse(msg, bot).then(() => { return; });
            return;
        }
        // Μπαμπης
        else if (msg.author.tag === "Sheepstress#9964" && (msg.content.toLowerCase().includes("eye") || msg.content.toLowerCase().includes("mati") || msg.content.toLowerCase().includes("μάτι") || msg.content.toLowerCase().includes("ματι")))
        {
            await http.get(`https://b9bv2wd97h.execute-api.us-west-2.amazonaws.com/prod/api/player/4611686018483989613`, async res =>
            {
                let data = '';

                // A chunk of data has been received.
                res.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                res.on('end', async () => {
                    const mpamphs = JSON.parse(data);
                    const activities = mpamphs.response.activities;
                    const dsc = activities.find(a => a.activityHash === 910380154);
                    const clears = dsc.values.clears;

                    await msg.channel.send(`${msg.author}, ${clears} DSC runs and counting απ' ότι βλέπω βρωμιάρη!`);
                });
            }).on("error", (err) => {
                console.log("Error: " + err.message)
            });
            return;
        }
        // μάνα
        else if (
            msg.content.toLowerCase().includes("μάνα σου") || msg.content.toLowerCase().includes("μανα σου") || msg.content.toLowerCase().includes("mana sou") || msg.content.toLowerCase().includes("mana soy") ||
            msg.content.toLowerCase().includes("μάνας σου") || msg.content.toLowerCase().includes("μανας σου") || msg.content.toLowerCase().includes("μάνασ σου") || msg.content.toLowerCase().includes("μανασ σου") || msg.content.toLowerCase().includes("manas sou") || msg.content.toLowerCase().includes("manas soy") ||
            msg.content.toLowerCase().includes("μάνα του") || msg.content.toLowerCase().includes("μανα του") || msg.content.toLowerCase().includes("mana tou") || msg.content.toLowerCase().includes("mana toy") ||
            msg.content.toLowerCase().includes("μάνας του") || msg.content.toLowerCase().includes("μανας του") || msg.content.toLowerCase().includes("μάνασ του") || msg.content.toLowerCase().includes("μανασ του") || msg.content.toLowerCase().includes("manas tou") || msg.content.toLowerCase().includes("manas toy")
        )
        {
            var text = `ΤΙ ΕΙΠΕ ΓΙΑ ΤΗΝ ΜΑΝΑ ΣΟΥ!!!`;
            const mention = GetMentions(bot, msg);

            if (mention !== msg.author) text =`${mention}, ${text}`;

            await msg.channel.send(text);
            return;
        }
        // handle lfg
        else if (msg.channel.name.includes("looking-for-guardians") && msg.content.includes("<@&768383690560241684>"))
        {
            await HandleLFG(msg).then(
                () => { return; },
                () => 
                {
                    console.log(`The same dude sent to LFG chat. Dude was ${msg.author.username}.`);
                    return;
                }
            );

            return;
        }
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
            // ποιον - αυτον joke
            else if (
                msg.content.includes("ΠΟΙΟΝ") ||
                msg.content.includes(" ποιον") || msg.content.includes(" ποίον") || msg.content.includes(" ποιόν") ||
                msg.content.includes("Ποιον") || msg.content.includes("Ποίον") || msg.content.includes("Ποιόν") ||
                msg.content.includes(" poion") || msg.content.includes("Poion") || msg.content.includes("POION")
                )
            {
                await msg.channel.send(`${msg.author} ΑΥΤΟΝ 1-0! ΒΟΥΛΩΝΕ ΤΩΡΑ!`);
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
            // Βρίζει μάνες
            else
                await CurseEverything(msg).then(
                    () => { return; },  // resolve
                    () => { ConsoleError('user', msg.author.username, msg.guild, msg.channel.name) }   // reject
                );
        }
        
        return;
    },
    HandleDM: async function (bot, msg)
    {
        if (msg.author.bot) return;

        if (!memeWhitelist.includes(msg.author.tag))
        {
             await msg.author.send("Δεν είσαι στην λίστα! Άντε γαμήσου παιδάκι!");
             console.log(`Ο ${msg.author.tag} που δεν είναι στην λίστα το πίστεψε! LOL! Μου είπε: ${msg.content}`);
             console.log("----------------------------------------------------------------------------------------------------------------------------");
             return;
        }

        // if (msg.author.tag === "Sheepstress#9964" && msg.content.startsWith("stats ") && msg.content.includes("#"))
        // {
        //     const payload = msg.content.split('stats ')[1];
        //     var target = false;
        //     try 
        //     {
        //         target = bot.users.find(u => u.tag === payload);
        //     }
        //     catch (err) {
        //         console.log(`O ${msg.author.tag} μου ζήτησε να βρω τον ${payload} και δεν το βρήκα.`);
        //         console.log("----------------------------------------------------------------------------------------------------------------------------");
        //     }

        //     if (target)
        //     {
        //         const toSend = {
        //             id: target.id,
        //             lastMessage: {
        //                 deleted: target.lastMessage.deleted,
        //                 content: target.lastMessage.content,
        //                 mentions: {
        //                     everyone: target.lastMessage.mentions.everyone,
        //                     users: target.lastMessage.users || 'none',
        //                     roles: target.lastMessage.roles || 'none',
        //                 } || null
        //             } || null
        //         };

        //         // console.log(target)
        //         // console.log(toSend)
        //         await msg.author.send(`\`\`\`${JSON.stringify(toSend, null, 2)}\`\`\``);
        //     }
        //     else
        //         await msg.author.send("Δεν τον βρήκα αυτόν!");

        //     return;
        // }

        if (msg.content.startsWith("meme "))
        {
            if (
                msg.content.includes("{") &&
                msg.content.endsWith("}") &&
                msg.content.includes("\"target\"") &&
                msg.content.includes("\"message\"")
                )
            {
                console.log(`Ο ${msg.author.tag} memeάρει με: ${msg.content}`);
                console.log("----------------------------------------------------------------------------------------------------------------------------");
                const payload = JSON.parse(msg.content.split('meme ')[1]);
                let targetId = false;
                try {
                    targetId = bot.users.find(u => u.tag === payload.target).id;
                }
                catch (err) {
                    console.log(`O ${msg.author.tag} μου ζήτησε να βρω τον ${payload.target} και δεν το βρήκα.`);
                    console.log("----------------------------------------------------------------------------------------------------------------------------");
                }
                if (targetId)
                {
                    await msg.author.send("Σε έχω, στέλνω τώρα!");
                    await bot.users.get(targetId).send(payload.message)
                    .then(
                        async () =>
                        {
                            await msg.author.send("Έφτασε το meming σου!");
                            const time = GetTime();
                            fs.appendFile(memingFile, `${time}: O \'${msg.author.tag}\' memeάρει με: ${msg.content}\r\n`, function (err)
                            {
                                if (err)
                                    console.log(err);
                            });
                            return;
                        },
                        async error =>
                        {
                            console.log(error);
                            console.log("----------------------------------------------------------------------------------------------------------------------------");
                            await msg.author.send(`Κάτι πήγε στραβά και δεν μπόρεσα να παραδώσω το μήνυμα! Το πρόβλημα ήταν: \`\`\`${error.name}: ${error.message}\`\`\``);
                        }
                    );
                }
                else msg.author.send("Δεν βρήκα τον στόχο. Πρέπει να είναι κάποιος που να έχω τουλαχιστον έναν σέρβερ κοινό!");
            }
            else
                await msg.author.send("Ρε! Άμα δεν το θυμάσε απ'έξω, γράψε ```help``` και κάντο copy+paste, δεν είναι ντροπή!");

            return;
        }
        else if (msg.content.toLowerCase().includes("help"))
        {
            await msg.author.send('\
----------------------------------------------------------------------------------\r\n\
| ΟΤΙ ΒΛΕΠΕΙΣ ΕΔΩ ΓΙΝΟΝΤΑΙ ΜΟΝΟ ΑΝ ΚΑΝΕΙΣ PM ΣΕ ΕΜΕΝΑ!!!!! |\r\n\
----------------------------------------------------------------------------------\r\n\
\r\n\
- Αν θες να memeάρεις κάποιον, γράψε:\r\n\
```json\r\n\
meme {"target": "Username#1234", "message": "Εδώ μόνο αλλάζεις!"}\r\n\
```\r\n\
Άλλαξε μόνο τα πράσινα γράμματα. \r\n\
Απαγορεύεται να βάλεις μέσα στο μήνυμά σου τον χαρακτήρα *\"*, γιατί δεν θα δουλέψει!\r\n\
Mπορείς να στείλεις μόνο σε άτομα που είναι σε κοινό server με εμένα!\r\n\
-------------------------------------------------------------------------------------------------------------------------------------------\r\n\
            ');

            return;
        }
        else
        {
            console.log(`DM from ${msg.author.tag}: ${msg.content}`);

            await readline.question(`Will I answer? `, async (answer) =>
            {
                if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === "y" || answer.toLowerCase() === 'ναι' || answer.toLowerCase() === "ν")
                {
                    await readline.question(`What do I reply? `, async (reply) =>
                    {
                        await msg.author.send(reply);
                        readline.close();
                    });
                }
                else if (answer.toLowerCase() === 'explain' || answer.toLowerCase() === 'exp' || answer.toLowerCase() === 'εξηγηση' || answer.toLowerCase() === 'εξ')
                {
                    await msg.author.send(`Γειά σου φίλε ${msg.author.tag}. Ενδέχεται ο προγραμματιστής μου να μην είναι διαθέσιμος για συζήτηση. Για να δεις τι άλλο μπορείς να κάνεις στα PM μαζί μου, στείλε μου 'help'!`);
                    console.log("Explaining...");
                    console.log(`----------------------------------------------------------------------------------------------------------------------------`);
                }
                else
                {
                    await msg.author.send("Μην περιμένεις απάντηση!");
                    readline.close();
                    console.log("Not answering...");
                    console.log(`----------------------------------------------------------------------------------------------------------------------------`);
                }
            });

            return;
        }
    }
}

// Helper Functions
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let lastLFGSender;
const fs = require('fs');
const suggestionsFile = "./src/suggestions.txt";
const memingFile = "./src/meming.txt"
const http = require('https');

const dickheads = [
    "Daddy Gelt",
    "✪𝔉𝔲𝔯𝔦𝔬𝔲S✪",
    "𝓗𝓮𝓵𝓵𝓯𝓪𝓵𝓵𝓮𝓷",
    "StaikoChan",
    "The face of true Carnage",
    "𝘾𝙚𝙧𝙫𝙚𝙧𝙪𝙨𝙂𝙧",
    "ℂ𝔢ⓡν𝕖𝐫υรﻮ𝓻",
];

const noSuggestions = [
    
];

const memeWhitelist = [
    "Sheepstress#9964",
    "saeko#6666",
    "Saint-14-TheViolentKing#2277",
    "Simpa#7809",
    "Eniantas#4748",
    "𝒴𝒪𝒰𝑅𝓃𝒶𝓂𝑒𝐻𝐸𝑅𝐸#3639",
    "ʙᴇʏᴏɴᴅᴛʜᴇᴍᴀᴄʜ1ɴ3#7047",
]

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
    "name, it's time for your pee pee poo poo check.",
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
    // "name, δεν χρειάζεται να αναπληρώσεις το κενό που άφησε ο Shekiro.",
    // "Σε όλους αρέσει να είναι Yu-Gi-Oh players, name, αλλά εσύ φτάνεις στο επίπεδο του Shekiro!",
    // "Θα σε έλεγα κακό παίχτη, name, αλλά θα ήταν προσβολή στους κακούς παίχτες να τους υποβιβάσω στο επίπεδο του Shekiro!",
    "name, υπάρχει λόγος που το Vine πέθανε και αυτός είσαι εσύ!",
    "name, βγάζεις το 'τ' από το 'ταυτίζομαι'!",
    "name, βρήκα αυτό στο search history σου, έχεις να πεις κάτι;\r\ndatetime: https://media1.tenor.com/images/afd69dfcc511c9617553581c2da8947f/tenor.gif?itemid=8085185",

    // Videos
    "video stfu.mp4",
    "video stfu_2.mp4",
    "video go_fuck_your_self.mp4",
    "video ur_opinion_does_not_matter.mp4",
    "video not_funny.mp4",
    "video can_you_shut.mp4",
    "video hug.mp4",
    "video so_retarded.mp4",
    "annoying_ass.mp4",

    // Gifs

    // Images
    "image wut.jpgConcattedrale di santa Maria Assunta",

    // Sounds
    "sound Deep_Stone_Lullaby_Sveny_-_Speaker.mp3",
];

const retardFiles = [
    "idiot-trumpretarded.gif",
    "stupid-retarded.gif",
    "spongebob-mocking.gif",
    "down-syndrome-huh.gif",
    "officer-doofy-salute.gif",
];

function ConsoleError(type, user, server, channel)
{
    const time = GetTime();
    console.log(`${time}: No action taken for ${type} ${user} on server \'${server}\' in channel \'${channel}\'!`);
    console.log(`----------------------------------------------------------------------------------------------------------------------------`);
}

function Suggestion(suggestion, author, server)
{
    const time = GetTime();
    fs.appendFile(suggestionsFile, `${time}: O \'${author}\' από τον σέρβερ \'${server}\' προτίνει: ${suggestion}\r\n`, function (err)
    {
        if (err)
            console.log(err);
        else 
            console.log(`${time}: O ${author} έκανε μία πρότασή!`);

        console.log(`----------------------------------------------------------------------------------------------------------------------------`);
    });
}

function ReplaceAll(string, search, replace)
{
    return string.split(search).join(replace);
}

function GetTime()
{
    var d = new Date();
    return ReplaceAll(d.toISOString().replace("T", " ").replace("Z", ""), "-", "/");
}

function GetMentions(bot, msg)
{
    var mention = msg.author;
    var mentions = Array.from(msg.mentions.users.keys());

    if (mentions.length > 0)
        mention = msg.mentions.users.get(mentions[mentions.length - 1]);

    while (mentions.includes(bot.user.id))
    {
        if (mentions.length === 1)
            mentions = [];
        else
            mentions = mentions.splice(mentions.indexOf(bot.user.id) - 1, 1);


        if (mentions.length > 0)
            mention = msg.mentions.users.get(mentions[mentions.length - 1]);
        else
            mention = msg.author;
    }

    return mention;
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

    if (mention.username + "#" + mention.discriminator === "Sheepstress#9964")
        await msg.channel.send(`Άκουσε καλά παιδάκι ${msg.author}, τον προγραμματιστή που με έφτιαξε δεν θα τον πιάνεις στο στόμα σου!`);
    else
    {
        const reply = `\
Γειά σου ${mention}!\r\n
- Σε περίπτωση που δεν βλέπεις καλά, επικοινώνησε με τον οφθαλμίατρο που προτείνουμε:\r\n**\`\`\`Γεώργιος Αυτισματίας\r\nΟδός: Μητρώς 69\r\nTηλέφωνο: 6969420666\`\`\`**\
- Σε περίπτωση που δεν έχεις εγκέφαλο, είσαι ευπρόσδεκτος σε αυτόν τον σέρβερ: https://discord.gg/cEcy53C\r\n
- Σε περίπτωση που ο παραπάνω σέρβερ δεν σε καλύπτει, προτείνουμε και αυτόν: https://discord.gg/KJwuW3jBSA\r\n
- Τέλος, ακόμα τίποτα από τα παραπάνω δεν σε καλύπτει, τότε προτίνω ΝΑΠΑΣΝΑΠΕΘΑ... να μπεις σε αυτόν τον σέρβερ να βρείς νέους φίλους: \
        `;
        await msg.channel.send(reply);
        await msg.delete(1);
    }
    return Promise.resolve();
}

async function HandleRetard(msg, client)
{
    const mention = msg.mentions.users.first() || msg.author;
    
    if (mention.username + "#" + mention.discriminator === "Sheepstress#9964")
        await msg.channel.send(`Άκουσε καλά παιδάκι ${msg.author}, τον προγραμματιστή που με έφτιαξε δεν θα τον πιάνεις στο στόμα σου!`);
    else
    {
        const reply = `My nAme Is ${mention} aNd I aM rEtaRdED, dahhhhhh!`;
        const retardFile = "./src/media/retard/" + retardFiles[Math.floor(Math.random() * retardFiles.length)];
        await msg.channel.send(reply, {files: [retardFile]});
        await msg.delete(1);
    }
    return Promise.resolve();
}

async function HandleReverse(msg, client)
{
    const mention = msg.mentions.users.first() || msg.author;
    
    if (mention.username + "#" + mention.discriminator === "Sheepstress#9964")
        await msg.channel.send(`Άκουσε καλά παιδάκι ${msg.author}, τον προγραμματιστή που με έφτιαξε δεν θα τον πιάνεις στο στόμα σου!`);
    else
    {
        const retardFile = "./src/media/images/uno-reverse-card.jpg";
        await msg.channel.send(`NO U ${mention}`, {files: [retardFile]});
        await msg.delete(1);
    }
    return Promise.resolve();
}

async function CurseEverything(msg)
{
    let curseChance = 95;
    if (dickheads.includes(msg.author.username)) curseChance = 90;
    const roll = Math.floor(Math.random() * 101);
    await console.log(`Roll: ${msg.author.tag} ${roll} | Response: ${roll > curseChance} | Server: \'${msg.guild}\' | Channel: \'${msg.channel.name}\'`);

    if (roll > curseChance)
    {
        let curse = curses[Math.floor(Math.random() * curses.length)];
        if (curse.includes("name"))
        {
            curse = curse.replace("name", msg.author);

            if (curse.includes("datetime"))
            {
                var date = new Date();
                // date = date.setDate(date.getDate - 1);
                date = ReplaceAll(date.toISOString().replace("T", " ").replace("Z", ""), "-", "/");
                date = date.split('.')[0];

                curse = curse.replace('datetime', date);
            }

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
            curse = { files: [`./src/media/gifs/${gif}`] };
            await msg.channel.send(msg.author, curse);
        }
        else if (curse.includes("image"))
        {
            const image = curse.split(" ")[1];
            curse = { files: [`./src/media/images/${image}`] };
            await msg.channel.send(msg.author, curse);
        }
        else if (curse.includes("sound"))
        {
            const sound = curse.split(" ")[1];
            curse = { files: [`./src/media/sound/${sound}`] };
            await msg.channel.send(msg.author, curse);
        }

        return Promise.resolve();
    }

    return Promise.reject();
}