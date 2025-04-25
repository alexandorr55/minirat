<script lang="ts">
  import { championNameToId } from "$lib/constants/champions";
  
  // getting it from page.server.js 
  export let champUsage;

  // This function will return the URL of the champion's icon
  const getIconUrl = (id: number) =>
  `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`;

  // only grab champs that are found in the json (i.e "available")
  const filteredChampions = Object.entries(championNameToId).filter(([name]) =>
      champUsage.hasOwnProperty(name) 
  );
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 16px;
    max-width: 80vw;
    margin: 0 auto;
  }

  .champion-icon {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  .icon {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 8px;
    background: #222;
    padding: 4px;
  }

  .icon-name {
    text-align: center;
    font-size: 14px;
    color: var(--background-secondary);
    margin-top: 4px;
  }

  .icon-name:hover {
    text-decoration: underline;
    color: var(--background-tertiary);
  }

  /* hover effect starts here */
  .champion-icon:hover .card {
    display: block;
  }

  /* this is the "card" for the hover*/
  .card {
    display: none;
    position: absolute;
    top: 100%; /* Place below the icon */
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 8px;
    border-radius: 8px;
    font-size: 14px;
    width: 120px;
    text-align: center;
    z-index: 10;
  }
</style>

<!-- grid content -->
<div class="grid">
  {#each filteredChampions as [name, id] (id)}
  <div class="champion-icon">
    <img src={getIconUrl(id)} alt="Champion Icon" class="icon" />
    <div class="icon-name">{name}</div>
    <div class="card">
      <p>{name}</p>
      {#each Object.entries(champUsage[name]) as [player, stats]}
        <p>
          {player}: {stats.total} games<br />
          {stats.wins}W / {stats.losses}L<br />
          Winrate: {stats.winrate}
        </p>
      {/each}
    </div>
  </div>
  {/each}
</div>
