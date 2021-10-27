module.exports.run = (client, Discord) => {
    client.on('guildMemberAdd', (guildMember) => {
        const guildId = '868194557911781416';
        const memberCountChannelId = '868219318809292851';
        const nicknameChannel = '868219334374326332';

        client.channels.cache.get(memberCountChannelId).setName(`Ilość osób: ${client.guilds.cache.get(guildId).memberCount}`);
        client.channels.cache.get(nicknameChannel).setName(`Nowy: ${guildMember.username}`);
    })

    client.on('guildMemberRemove', (guildMember) => {
        const guildId = '868194557911781416';
        const memberCountChannelId = '868219318809292851';

        client.channels.cache.get(memberCountChannelId).setName(`Ilość osób: ${client.guilds.cache.get(guildId).memberCount}`);
    })
};