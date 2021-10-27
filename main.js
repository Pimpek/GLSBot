const Discord = require('discord.js');
const nodemon = require('nodemon');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const { token, prefix } = require('./config.js')
const fs = require('fs');
const { cpuUsage } = require('process');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const commandFiles = fs.readdirSync('./komendy/').filter(file => file.endsWith('.js'));

client.once('ready', () => {
  console.log('Bot jest online!');
  client.user.setActivity('Gildia GLS - https://discord.gg/dpS3ft2Twn', {type: 'playing'});
});

for (const file of commandFiles) {
    const command = require(`./komendy/${file}`);
    client.commands.set(command.name, command);
}

client.on('guildMemberAdd', guildMember =>{
    const channel = guildMember.guild.channels.cache.get('868194557911781419');

    const embed = new Discord.MessageEmbed()
    .setColor('#B5BFFF')
    .setTitle("Dołączył do nas nowy użytkownik!")
    .setDescription(`<@${guildMember.user.id}> dołączył do serwera!\n`
        + `Jest nas teraz **${client.guilds.cache.get('868194557911781416').memberCount}**`);

    channel.send(embed);
})

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'boop') {
        client.commands.get('boop').execute(message, args);
    } else if (command === 'ping') {
        client.commands.get('ping').execute(message, args, client);
    } else if (command === 'testafk') {
        client.commands.get('testafk').execute(message, args);
    } else if (command === 'ankieta') {
        client.commands.get('ankieta').execute(message, args, Discord);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message. args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message. args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message. args);
    } else if (command === 'diss') {
        client.commands.get('diss').execute(message, args);
    } else if (command === "rr") {
        client.commands.get('rr').execute(message, args, Discord, client);
    } else if (command === 'zapros') {
        client.commands.get('zapros').execute(message, args, Discord);
    } else if (command === 'embed') {
        client.commands.get('embed').execute(message, args, Discord);
    }
});

client.login(token);