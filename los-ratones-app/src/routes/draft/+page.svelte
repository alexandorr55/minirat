<script>
  export let data; 
  const { draftdata } = data;
</script>

<!-- print every draft chronologically -->
{#if draftdata}
  <div style="color: white;">
    {#each draftdata as draft}
      <div>
        <p>Tournament:{draft.Tournament}</p>
        <p>Date:{draft.DateTime_UTC}</p>
        <p>Winner:{draft.WinTeam}</p>
        <p>Game:{draft.GameNumber}</p>

        <p>Team 1:{draft.Team1}</p>
        <p>Team 2:{draft.Team2}</p>

        <p>Team 1 Picks:{draft.Team1Picks.join(", ")}</p>
        <p>Team 2 Picks:{draft.Team2Picks.join(", ")}</p>

        <p>Team 1 Bans:{draft.Team1Bans.join(", ")}</p>
        <p>Team 2 Bans:{draft.Team2Bans.join(", ")}</p>
      </div>
    {/each}
  </div>
{:else}
  <p style="color: white;">Loading draft data...</p>
{/if}