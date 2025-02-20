
// Animatak
// So good to do translation .,.

const GameCulture = new NativeClass('Terraria.Localization', 'GameCulture');

const translations = {
	Portuguese: {
		teleportedTownNPCs: 'Todos os NPCs de Cidade foram teletransportados para suas Casas!'
	},
	Spanish: {
		teleportedTownNPCs: '¡Todos los NPCs de la ciudad fueron teletransportados a sus casas!'
	},
	Italian: {
		teleportedTownNPCs: 'Tutti gli NPC della città sono stati teletrasportati nelle loro case!'
	},
	French: {
		teleportedTownNPCs: 'Tous les PNJ de la ville ont été téléportés dans leurs maisons!'
	},
	German: {
		teleportedTownNPCs: 'Alle Stadt-NPCs wurden in ihre Häuser teleportiert!'
	},
	Russian: {
		teleportedTownNPCs: 'Все городские NPC были телепортированы в свои дома!'
	},
	Default: {
		teleportedTownNPCs: 'All Town NPCs were teleported to their homes!'
	}
};

function getCurrentCulture() {
	const cultures = GameCulture.CultureName;
	for (let cultureName in cultures) {
		if (GameCulture.FromCultureName(cultures[cultureName]).IsActive) {
			return cultureName;
		}
	}
	return 'Default';
}

const translate = {
	teleportedTownNPCs() {
		const culture = getCurrentCulture();
		return translations[culture]?.teleportedTownNPCs || translations.Default.teleportedTownNPCs;
	}
};

export { translate };