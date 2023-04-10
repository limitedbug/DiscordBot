const {Client, IntentsBitField}=require('discord.js')

const bot = new Client({intents: [IntentsBitField.Flags.GuildMessages]})
bot.on('ready', client => {
    console.log(client.user.tag);
})

bot.login('TOKEN')