const events = require('events');

const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
(async function() {
    client.login(token);
    await events.once(client,'ready');
    
    client.on('messageCreate', async (message) => {
        if(message.content.startsWith("https://twitter")){
            channel = message.channelId;
            contents = message.cleanContent;
            message.delete();
            console.log("gotem")
            client.channels.cache.get(channel).send("https://vx" + contents.slice(8));

        }
    })
}());