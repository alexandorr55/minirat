<script lang="ts">
	import type { ChampionEntry } from '$lib/constants/types/ChampionTypes.js';
	import { Heading, Img, P, Popover, Span } from 'flowbite-svelte';
	import { blur, scale } from 'svelte/transition';
  
  let { data } = $props();

  const playedChamps: ChampionEntry[] = data.playedChamps;
	const unplayedChamps: ChampionEntry[] = data.unplayedChamps;

	function sanitizeId(name: string): string {
    return name.replace(/[^a-zA-Z0-9-_]/g, '-');
  }

</script>


<Heading color="text-peachYellow-200 text-center" class="uppercase border-b-2 mb-8 py-4">Champions Played</Heading>
<div class="flex flex-wrap gap-4 justify-center">
  {#each playedChamps as champData}
    {@render loadChampion(champData)}
  {/each}
</div>
<Heading color="text-peachYellow-200 text-center" class="uppercase border-b-2 my-8 py-4">Unplayed Champions</Heading>
<div class="flex flex-wrap gap-4 justify-center">
  {#each unplayedChamps as champData}
    {@render loadChampion(champData)}
  {/each}
</div>

{#snippet loadChampion(champData: ChampionEntry)}
  <div id={sanitizeId(champData[0])} class="sm:w-1/18 w-1/5 text-center justify-center">
    <Img src={champData[1].iconUrl} alt={champData[0]}/>
    <Span class="icon-name text-peachYellow-200">{champData[0]}</Span>
    {#if champData}
      <Popover trigger="hover" triggeredBy="#{sanitizeId(champData[0])}" title={champData[0]} transition={blur} class="w-64">
        {#each Object.entries(champData[1].players) as [playerName, playerStats]}
          <P class="font-bold">{playerName}</P>
          <P>Played: {playerStats.total}</P>
          <P>Winrate: {playerStats.winrate * 100}%</P> 
          <P>Wins: {playerStats.wins}</P>
          <P>Losses: {playerStats.losses}</P>
          {#if Object.entries(champData[1].players).length > 1 && playerName !== Object.entries(champData[1].players).slice(-1)[0][0]}
            <hr class="my-2"/>
          {/if}
        {/each}
      </Popover>
    {/if}
  </div>
{/snippet}