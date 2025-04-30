<script>
  export let data; 
  const { draftdata } = data;
</script>

{#if draftdata}
  <div style="color: white;">
    {#each draftdata as draft}
      <div class="mb-8 border-b border-white pb-4">
        <p class="font-bold">{draft.Tournament} , {draft.DateTime_UTC}</p>
        <p>Winner: {draft.WinTeam}</p>

        <!-- Picks Row with border -->
        <div class="flex justify-between mt-4">
          <!-- Team 1 Picks -->
          <div class="w-1/2 pr-4">
            <p style="color: lightblue;">{draft.Team1} Picks:</p>
            <div class="flex gap-2 flex-wrap">
              {#each draft.Team1Picks as champ}
                <div class="flex flex-col items-center text-center w-16">
                  <img src={champ.iconUrl} alt={champ.name} class="w-10 h-10 rounded"/>
                  <span class="text-xs text-white">{champ.name}</span>
                </div>
              {/each}
            </div>
          </div>

          <!-- Vertical divider -->
          <div class="border-l border-gray-400 mx-2"></div>

          <!-- Team 2 Picks -->
          <div class="w-1/2 pl-4">
            <p style="color: lightcoral;">{draft.Team2} Picks:</p>
            <div class="flex gap-2 flex-wrap">
              {#each draft.Team2Picks as champ}
                <div class="flex flex-col items-center text-center w-16">
                  <img src={champ.iconUrl} alt={champ.name} class="w-10 h-10 rounded"/>
                  <span class="text-xs text-white">{champ.name}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Bans Row with border -->
        <div class="flex justify-between mt-4">
          <!-- Team 1 Bans -->
          <div class="w-1/2 pr-4">
            <p style="color: lightblue;">{draft.Team1} Bans:</p>
            <div class="flex gap-2 flex-wrap">
              {#each draft.Team1Bans as champ}
                <div class="flex flex-col items-center text-center w-16">
                  <img src={champ.iconUrl} alt={champ.name} class="w-10 h-10 rounded"/>
                  <span class="text-xs text-white">{champ.name}</span>
                </div>
              {/each}
            </div>
          </div>

          <!-- Vertical divider -->
          <div class="border-l border-gray-400 mx-2"></div>

          <!-- Team 2 Bans -->
          <div class="w-1/2 pl-4">
            <p style="color: lightcoral;">{draft.Team2} Bans:</p>
            <div class="flex gap-2 flex-wrap">
              {#each draft.Team2Bans as champ}
                <div class="flex flex-col items-center text-center w-16">
                  <img src={champ.iconUrl} alt={champ.name} class="w-10 h-10 rounded"/>
                  <span class="text-xs text-white">{champ.name}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <p style="color: white;">Loading draft data...</p>
{/if}
