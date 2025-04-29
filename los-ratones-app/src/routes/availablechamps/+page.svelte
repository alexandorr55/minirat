<script lang="ts">
	import type { ChampionPlayerInfo, ChampionPlayerStats } from '$lib/constants/types/ChampionPlayerStats.js';
	import { Img, Span } from 'flowbite-svelte';
  
  let { data } = $props();
  console.log('Available Champions Data:', data);

  // Any champion with player stats is a played champion
  const playedChampoions: ChampionPlayerInfo = {};
  
  // Any champion without player stats is an unplayed champion
  const unplayedChampoions: ChampionPlayerInfo = {};

  
</script>



<!-- Two sections, played and unplayed champions -->
<section class="played-champions">
  <h2>Played Champions</h2>
  <div class="grid">
    {#each Object.entries(playedChampoions) as [name, data]}
      <div class="champion-icon">
        <Img src={data[1].iconUrl} alt={name} class="icon" />
        <Span class="icon-name">{name}</Span>
      </div>
    {/each}
  </div>
</section>

<section class="unplayed-champions">
  <h2>Unplayed Champions</h2>
  <div class="grid">
    {#each Object.entries(unplayedChampoions) as [name, data]}
      <div class="champion-icon">
        <Img src={data[1].iconUrl} alt={name} class="icon" />
        <Span class="icon-name">{name}</Span>
      </div>
    {/each}
  </div>
</section>