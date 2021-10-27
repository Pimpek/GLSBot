module.exports = {
    name: 'testafk',
    description: 'TestAFK',
    execute(message, args) {
        message.react('✅');
        message.channel.send('Jestem!');
    },
};