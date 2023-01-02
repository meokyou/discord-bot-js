const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Information about the commands provided.')
		.addStringOption(option => option.setName('input').setDescription('The input to echo back')),
	async execute(interaction) {
		const value = interaction.options.getString('input');
		if (value) return interaction.reply(`The options value is: \`${value}\``);
		return interaction.reply('No option was provided!');
	},
};