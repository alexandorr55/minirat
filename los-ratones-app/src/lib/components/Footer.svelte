<script>
	export let players = [
		{ name: 'Caedrel', twitch: 'Caedrel', twitter: 'Caedrel', youtube: 'Caedrel', merch: 'https://losratones.shop/' },
		{ name: 'Baus', twitch: 'thebausffs', twitter: 'thebausffs', youtube: 'channel/UCu7ODDeIZ4x1rJwM1LCVL8w', dpm: 'Thebausffs' },
		{ name: 'Velja', twitch: 'velja_lol', twitter: 'Velja_LOL', youtube: '@Velja_lol', dpm: 'Velja' },
		{ name: 'Nemesis', twitch: 'lol_nemesis', twitter: 'nemesis_lol', youtube: 'nemesis_lol', dpm: 'Nemesis' },
		{ name: 'Crownie', twitch: 'crownie_lol', twitter: 'crownshotlol', youtube: '@crownielol123', dpm: 'Crownie' },
		{ name: 'Rekkles', twitch: 'rekkles', twitter: 'RekklesLoL', youtube: 'Rekkles', dpm: 'Rekkles' }
	];
</script>

<footer class="footer">
	{#each players as player}
		<div class="footer-column">
			<h3>{player.name}</h3>
			<ul>
				<li><a href={`https://twitch.tv/${player.twitch}`} target="_blank"><i class="fa-brands fa-twitch"></i> Twitch</a></li>
				<li><a href={`https://x.com/${player.twitter}`} target="_blank"><i class="fa-brands fa-x-twitter"></i> Twitter</a></li>
				<li><a href={`https://www.youtube.com/${player.youtube}`} target="_blank"><i class="fa-brands fa-youtube"></i> Youtube</a></li>
				{#if player.merch}
					<li><a href={player.merch} target="_blank"><i class="fa-solid fa-shirt"></i> LR Merch</a></li>
				{/if}
				{#if player.dpm}
					<li><a href={`https://dpm.lol/pro/${player.dpm}`} target="_blank"><i class="fa-solid fa-magnifying-glass"></i> DPM.lol</a></li>
				{/if}
			</ul>
		</div>
	{/each}
</footer>

<style>
	.footer {
		margin-top:40px;
		color: var(--color-lion-500);
		padding: 20px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		text-align:center;
		border-radius:5px;
		width: 100vw;
		border-top: var(--color-peachYellow-200) 4px solid;
	}
	.footer-column {
		flex: 1;
		min-width: 150px;
		margin: 10px;
	}
	.footer-column h3 {
		font-size: 20px;
		margin-bottom: 10px;
		text-decoration: underline;
	}
	.footer-column ul {
		list-style: none;
		padding: 0;
	}
	.footer-column ul li {
		margin-bottom: 8px;
	}
	.footer-column ul li a {
		text-decoration: none;
		color: var(--color-lion-500);
		font-size:15px;
	}
	.footer-column ul li a:hover {
		text-decoration: underline;
		color: var(--color-peachYellow-200);
	}
</style>