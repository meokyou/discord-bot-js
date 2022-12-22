const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('logout')
        .setDescription('Shutdown the bot serverside.')
        .setDefaultMemberPermissions()
        .setDMPermission(true),
        async execute(interaction) {
                if (interaction.user.id === '655528216093524038') {
                    await interaction.reply('Shutting down...');
                    return process.exit(0);
                } await interaction.reply('You are not authorised to perform this operation.')
                    
        },

}