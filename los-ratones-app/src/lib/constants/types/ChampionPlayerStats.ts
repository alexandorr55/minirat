export type PlayerStats = {
	total: number;
	wins: number;
	losses: number;
	winrate: number; // between 0 and 1
};

export type PlayerStatsWithName = {
	[playerName: string]: PlayerStats | null;
};

export type ChampionPlayerStats = {
	[championName: string]: {
		[playerName: string]: PlayerStats;
	};
};

export type ChampionPlayerInfo = {
	[championName: string]: {
		iconUrl: string;
		usageData: PlayerStatsWithName[];
	};
};
