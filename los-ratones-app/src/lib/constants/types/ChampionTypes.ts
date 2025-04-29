export type PlayerStats = {
	total: number;
	wins: number;
	losses: number;
	winrate: number; // between 0 and 1
};

export type ChampionPlayerStats = {
	[championName: string]: {
		[playerName: string]: PlayerStats;
	};
};

export type ChampionPlayerInfo = {
	iconUrl: string;
	players: {
		[playerName: string]: PlayerStats;
	};
};

export type ChampionEntry = [championName: string, data: ChampionPlayerInfo];

export type CombinedChampData = {
	playedChamps: ChampionEntry[];
	unplayedChamps: ChampionEntry[];
};
