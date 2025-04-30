import { championNameToId } from '$lib/constants/champions';

export async function load() {
	const res = await fetch('https://tytnkhvjyqbdtvokpjel.supabase.co/storage/v1/object/public/json-data-public//drafts-data.json');
	const data = await res.json();

  // before sending the data over, 
  // let's map the icon urls 
  // so it's easier for front end to put pictures
	const processed = data.map((game: any) => ({
		...game,
		Team1Picks: mapChampionsToIcons(game.Team1Picks),
		Team2Picks: mapChampionsToIcons(game.Team2Picks),
		Team1Bans: mapChampionsToIcons(game.Team1Bans),
		Team2Bans: mapChampionsToIcons(game.Team2Bans),
	}));

	return {draftdata: processed};
}

function getIconUrl(id: number): string {
	return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`;
}

function mapChampionsToIcons(names: string[]): { name: string; iconUrl: string }[] {
	const champSet = new Set(names); // fast lookup for filtering
	return Object.entries(championNameToId)
		.filter(([champName]) => champSet.has(champName))
		.map(([champName, champId]) => ({
			name: champName,
			iconUrl: getIconUrl(champId),
		}));
}

