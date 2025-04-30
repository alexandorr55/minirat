<script>
  export let data;
  const { calendardata } = data.calendardata;  // Access the nested calendardata
</script>

<h1 class="text-2xl font-bold mb-4 text-white">Calendar</h1>

{#if calendardata && calendardata.length > 0}
  {#each calendardata as event}
    <div class="p-4 border border-gray-700 rounded bg-gray-800 text-white mb-4">
      <p><strong>Type:</strong> {event.event_type}</p>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Description:</strong> {event.description}</p>

      {#if event.scores && event.scores.length > 0}
        <div class="mt-2">
          <p><strong>Score:</strong></p>
          {#each event.scores as score}
            <ul class="ml-4 list-disc">
              <li>LR: {score.lr_score}</li>
              <li>{score.opponent_name}: {score.opponent_score}</li>
            </ul>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
{:else}
  <p class="text-white">No events found.</p>
{/if}
