const { REST, Routes } = require('discord.js');
const prompt = require('prompt-sync')();
const { clientId, token } = require('./config.json');

const commandId = prompt('[ID]: ');
const type = prompt('[TYPE]: ');
const rest = new REST({ version: '10' }).setToken(token);

switch (type) {
	case 'global' | 'client': rest.delete(Routes.applicationCommand(clientId, commandId))
		.then(() => console.log('Successfully deleted command'))
		.catch(console.error); break;

	case 'guild' | 'server': rest.delete(Routes.applicationGuildCommand(clientId, guildId, 'commandId'))
		.then(() => console.log('Successfully deleted guild command'))
		.catch(console.error); break;
	
	default: console.error('Invalid type given.');
}

