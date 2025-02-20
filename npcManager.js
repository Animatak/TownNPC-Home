
export function getValidTownNPCs() {
	return Array.from(Main.npc).filter(npc => npc !== null && npc.active && npc.townNPC && !npc.homeless);
}

export function NPCToHome(npc) {
	const tileX = Math.floor(npc.position.X / 16);
	const tileY = Math.floor(npc.position.Y / 16);

	if (tileX !== npc.homeTileX || tileY !== npc.homeTileY) {
		NPC.AI_007_TownEntities_TeleportToHome(npc, npc.homeTileX, npc.homeTileY);
	}
}

export function TeleportAllNPCs() {
	const validNPCs = getValidTownNPCs();
	validNPCs.forEach(npc => NPCToHome(npc));
}

export function NPCsHomeChange() {
	Array.from(Main.npc).forEach(npc => {
		if (npc !== null && npc.active && npc.townNPC && !npc.homeless) {
			if (npc.homeTileX != null && npc.homeTileY != null && (npc.homeTileX !== npc.oldHomeTileX || npc.homeTileY !== npc.oldHomeTileY)) {
				NPCToHome(npc);

				npc.oldHomeTileX = npc.homeTileX;
				npc.oldHomeTileY = npc.homeTileY;
			}
		}
	});
}
