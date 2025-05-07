<script lang="ts">
  import { Label, Input, Select, Textarea, Datepicker, P, Button } from 'flowbite-svelte';

  export let data;

  // to get past stupid "idk what type u are" warnings
  type Score = {
  lr_score: string;
  opponent_score: string;
  opponent_name: string;
};

  type CalendarEvent = {
    event_type: string;
    date: string;
    description: string;
    scores: Score[];
  };

  const calendardata: CalendarEvent[] = data.calendardata.calendardata ?? [];


  let selected = '';
  let selectedDate: Date | null = null;
  let description = '';
  let lrScore = '';
  let opponentScore = '';
  let opponentName = '';

  const dateEvent = [
    { value: 'of', name: 'Officials' },
    { value: 'sc', name: 'Scrims' },
    { value: 'va', name: 'Variety' }
  ];

  const handleSubmit = async () => {
    try {
      const newEvent = {
        event_type: selected,
        date: selectedDate?.toISOString() ?? null,
        description,
        scores: [
          {
            lr_score: lrScore,
            opponent_score: opponentScore,
            opponent_name: opponentName
          }
        ]
      };

      const updatedPayload = {
        calendardata: Array.isArray(calendardata)
          ? [...calendardata, newEvent]
          : [newEvent]
      };

      const res = await fetch('/calendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPayload)
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Unknown error');
      alert('Event submitted successfully! Please wait five minutes and then refresh before putting in another action.');
      // Reset fields after successful submit
      location.reload()
    } catch (err) {
      console.error('Submission failed:', err);
      alert('Error submitting event. Check the console for details.');
    }
      
  };

  const handleDelete = async () => {
    if (!selectedDate) {
      alert('Please select a date to delete.');
      return;
    }

    const deleteDate = selectedDate.toISOString().split('T')[0]; // "2025-05-02"

    const filteredEvents = calendardata.filter((event) => {
      const eventDate = event.date.split('T')[0];
      return eventDate !== deleteDate;
    });

    const updatedPayload = { calendardata: filteredEvents };

    try {
      const res = await fetch('/calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPayload)
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || 'Unknown error');
      alert('Events deleted for selected date! Please wait five minutes and then refresh before putting in another action.');
      // Reset fields after successful submit
      location.reload();

    } catch (err) {
      console.error('Delete failed:', err);
      alert('Error deleting events. Check the console for details.');
    }


  };

  const handleAddScore = async () => {
    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }

    const isoDate = selectedDate.toISOString();
    const scoreToAdd = {
      lr_score: lrScore,
      opponent_score: opponentScore,
      opponent_name: opponentName
    };

    const updatedEvents = calendardata.map((event) => {
      if (event.date === isoDate) {
        const updatedScores = Array.isArray(event.scores)
          ? [...event.scores, scoreToAdd]
          : [scoreToAdd];
        return { ...event, scores: updatedScores };
      }
      return event;
    });

    const updatedPayload = { calendardata: updatedEvents };

    try {
      const res = await fetch('/calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPayload)
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Unknown error');
      alert('Score added to event! Please wait five minutes and then refresh before putting in another action.');
      // Reset fields after successful submit
      location.reload()
    } catch (err) {
      console.error('Score addition failed:', err);
      alert('Error adding score. Check the console for details.');
    }
  };
</script>

<!-- Form Layout -->
<form on:submit|preventDefault={handleSubmit} class="space-y-6">
  <Label class="text-peachYellow-200">
    Select event type
    <Select class="mt-2" items={dateEvent} bind:value={selected} />
  </Label>

  <div class="md:w-1/2">
    <Datepicker bind:value={selectedDate} />
    <P class="mt-4">
      Selected date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}
    </P>
  </div>

  <div>
    <Label for="description" class="text-peachYellow-200">Event description</Label>
    <Textarea
      id="description"
      name="description"
      placeholder="Event description..."
      bind:value={description}
    />
  </div>

  <div>
    <p class="text-peachYellow-200 mt-4">Score (if applicable)</p>

    <div class="mb-4">
      <Label for="lr-score" class="block mb-2 text-peachYellow-200">LR</Label>
      <Input id="lr-score" size="sm" placeholder="LR Score" bind:value={lrScore} />
    </div>

    <div class="mb-4">
      <Label for="opponent-score" class="block mb-2 text-peachYellow-200">Opponent Score</Label>
      <Input id="opponent-score" size="sm" placeholder="Opponent Score" bind:value={opponentScore} />
    </div>

    <div class="mb-4">
      <Label for="opponent-name" class="block mb-2 text-peachYellow-200">Opponent Name</Label>
      <Input id="opponent-name" size="sm" placeholder="Team Name" bind:value={opponentName} />
    </div>
  </div>

  <div class="flex flex-wrap gap-4">
    <Button color="alternative" pill type="submit">Submit</Button>
    <Button color="red" pill type="button" on:click={handleDelete}>Delete by Date</Button>
    <Button color="blue" pill type="button" on:click={handleAddScore}>Add Score to Date</Button>
  </div>
</form>
