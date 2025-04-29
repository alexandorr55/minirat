import { championNameToId } from '$lib/constants/champions';
import type {
	ChampionPlayerInfo,
	ChampionPlayerStats,
	PlayerStatsWithName
} from '$lib/constants/types/ChampionPlayerStats';

export async function load() {
	const res = await fetch(
		'https://tytnkhvjyqbdtvokpjel.supabase.co/storage/v1/object/public/json-data-public/champs-data.json'
	);
	const champUsage: ChampionPlayerStats = await res.json();

	// This function will return the URL of the champion's icon
	const getIconUrl = (id: number) =>
		`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`;

	// Create a new array with the champion name, icon URL, and usage data
	const championInfo = Object.entries(championNameToId).reduce((acc, [name, id]) => {
		const championName = name.replace(/_/g, ' ');
		acc[championName] = {
			iconUrl: getIconUrl(id),
			usageData: Object.entries(champUsage[championName] || {}).reduce(
				(usageAcc, [playerName, stats]) => {
					usageAcc[playerName] = stats ? { ...stats } : null; // Ensure we copy the stats object or set it to null
					return usageAcc;
				}
			)
		};
	}, {});

	return {
		championInfo
	};
}
