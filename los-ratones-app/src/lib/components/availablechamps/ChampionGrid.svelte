<script lang="ts">
    import { championNameToId } from "$lib/constants/champions";
    
    const getIconUrl = (id: number) =>
    `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`;

    const championsPlayed = $state();
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
  </style>

<div class="grid">
    {#each Object.entries(championNameToId) as [name, id] (id)}
    <div class="champion-icon">
        <img src={getIconUrl(id)} alt="Champion Icon" class="icon" />
        <div class="icon-name">{name}</div>
    </div>
    {/each}
</div>


