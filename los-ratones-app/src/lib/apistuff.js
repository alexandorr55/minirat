const players = ["Baus", "Velja", "Nemesis", "Crownie", "Rekkles"];
const champUsage = {};

async function fetchAllLosRatonesGames() {
    const url = "https://lol.fandom.com/api.php";
    const params = new URLSearchParams({
        action: "cargoquery",
        format: "json",
        tables: "ScoreboardGames",
        fields: "Team1, Team2, Team1Picks, Team2Picks",
        where: 'Team1="Los Ratones" OR Team2="Los Ratones"',
        limit: "500"
    });

    const response = await fetch(`${url}?${params.toString()}`);
    const data = await response.json();
    return data.cargoquery || [];
}

(async () => {
    const games = await fetchAllLosRatonesGames();
    console.log(`Los Ratones has played ${games.length} games total.`);

    for (const game of games) {
        const info = game.title;
        const picks = info.Team1 === "Los Ratones"
            ? info.Team1Picks.split(",")
            : info.Team2Picks.split(",");

        picks.forEach((champ, i) => {
            const player = players[i];
            if (!champUsage[champ]) champUsage[champ] = {};
            if (!champUsage[champ][player]) champUsage[champ][player] = 0;
            champUsage[champ][player]++;
        });
    }

    console.log(JSON.stringify(champUsage, null, 2));
})();
