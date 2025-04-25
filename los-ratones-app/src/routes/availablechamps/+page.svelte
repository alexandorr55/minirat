<script>
  import ChampionGrid from '../../lib/components/availablechamps/ChampionGrid.svelte'; 
  export let data; 
  const { champUsage } = data;
</script>

{#if champUsage}
  <ChampionGrid {champUsage} />
{:else}
  <p style="color: white;">Loading champion data...</p>
{/if}
