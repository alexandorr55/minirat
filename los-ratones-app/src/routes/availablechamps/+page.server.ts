import { championNameToId } from '$lib/constants/champions';
import type {
	ChampionEntry,
	ChampionPlayerStats,
	CombinedChampData,
} from '$lib/constants/types/ChampionTypes';

export async function load(): Promise<{ playedChamps: ChampionEntry[]; unplayedChamps: ChampionEntry[] }> {
	const res = await fetch(
		'https://tytnkhvjyqbdtvokpjel.supabase.co/storage/v1/object/public/json-data-public/champs-data.json'
	);
	const champUsage: ChampionPlayerStats = await res.json();

	const combinedData = combineChampData(champUsage);

	return combinedData;
}

function getIconUrl(id: number): string {
	return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`;
}

function combineChampData(champUsage: ChampionPlayerStats): CombinedChampData {
	const allChamps: ChampionEntry[] = Object.entries(championNameToId).map(
		([champName, champId]) => {
			const players = champUsage[champName] ?? {};

			const entry: ChampionEntry = [
				champName,
				{
					iconUrl: getIconUrl(champId),
					players,
				}
			];

			return entry;
		}
	);

	const playedChamps = allChamps.filter(
		([, data]) => Object.keys(data.players).length > 0
	);

	const unplayedChamps = allChamps.filter(
		([, data]) => Object.keys(data.players).length === 0
	);

	return { playedChamps, unplayedChamps };
}
