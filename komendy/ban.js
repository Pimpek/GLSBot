module.exports = {
    name: 'ban',
    description: 'banuje osoby',
    execute(message, args) {

        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Nie masz uprawnień do wysyłania wiadomości!");

        let member = message.mentions.users.first();
        if(member){
            let memberTarget = message.mentions.member.cache.get(member.id);
            memberTarget.ban();
            message.channel.send('Użytkownik został zbanowany.');
        }else{
            message.channel.send('Nie oznaczyłeś osoby, którą chcesz zbanować!');
        }
    }
}