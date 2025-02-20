
/* 
* Author: Animatak_
* Released: 31/01/2025
* Updated: ??
*/

import { using } from './ModClasses.js';
import { TeleportAllNPCs, NPCsHomeChange } from './npcManager.js';
import { translate } from './translater.js';

using('Terraria');
using('Terraria.Chat');

Main.DoUpdate.hook((original, self, gameTime) => {
	original(self, gameTime);

	if (globalThis.forceTeleportNPCs) {
		TeleportAllNPCs();
		globalThis.forceTeleportNPCs = false;
	}

	NPCsHomeChange();
});

ChatCommandProcessor.ProcessIncomingMessage.hook((original, self, message, client_id) => {
	original(self, message, client_id);

	const command = message.Text.trim();

	if (command.startsWith('/npchome')) {
		globalThis.forceTeleportNPCs = true;
		Main.NewText(translate.teleportedTownNPCs(), 0, 255, 255);
	}
});
