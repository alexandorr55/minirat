<script>
	import { Footer, FooterLinkGroup, FooterLink } from "flowbite-svelte";

	export let players = [
		{ name: 'Caedrel', twitch: 'Caedrel', twitter: 'Caedrel', youtube: 'Caedrel', merch: 'https://losratones.shop/' },
		{ name: 'Baus', twitch: 'thebausffs', twitter: 'thebausffs', youtube: 'channel/UCu7ODDeIZ4x1rJwM1LCVL8w', dpm: 'Thebausffs' },
		{ name: 'Velja', twitch: 'velja_lol', twitter: 'Velja_LOL', youtube: '@Velja_lol', dpm: 'Velja' },
		{ name: 'Nemesis', twitch: 'lol_nemesis', twitter: 'nemesis_lol', youtube: 'nemesis_lol', dpm: 'Nemesis' },
		{ name: 'Crownie', twitch: 'crownie_lol', twitter: 'crownshotlol', youtube: '@crownielol123', dpm: 'Crownie' },
		{ name: 'Rekkles', twitch: 'rekkles', twitter: 'RekklesLoL', youtube: 'Rekkles', dpm: 'Rekkles' }
	];
</script>

<Footer footerType="sitemap" class="bg-night-900 border-t-2 border-peachYellow-200 w-screen mt-8">
	<div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-3 lg:grid-cols-6 lg:w-4/5 lg:mx-auto">
		{#each players as player}
			<FooterLinkGroup ulClass="text-lion-500 ">
				<h3 class="text-lg underline font-semibold text-peachYellow-200">{player.name}</h3>
				<FooterLink classLi="hover:text-peachYellow-200" href={`https://twitch.tv/${player.twitch}`} target="_blank"><i class="fa-brands fa-twitch"></i> Twitch</FooterLink>
				<FooterLink classLi="hover:text-peachYellow-200" href={`https://x.com/${player.twitter}`} target="_blank"><i class="fa-brands fa-x-twitter"></i> Twitter</FooterLink>
				<FooterLink classLi="hover:text-peachYellow-200" href={`https://www.youtube.com/${player.youtube}`} target="_blank"><i class="fa-brands fa-youtube"></i> Youtube</FooterLink>
				{#if player.merch}
					<FooterLink classLi="hover:text-peachYellow-200" href={player.merch} target="_blank"><i class="fa-solid fa-shirt"></i> LR Merch</FooterLink>
				{/if}
				{#if player.dpm}
					<FooterLink classLi="hover:text-peachYellow-200" href={`https://dpm.lol/pro/${player.dpm}`} target="_blank"><i class="fa-solid fa-magnifying-glass"></i> DPM.lol</FooterLink>
				{/if}
			</FooterLinkGroup>
		{/each}
	</div>					
</Footer>