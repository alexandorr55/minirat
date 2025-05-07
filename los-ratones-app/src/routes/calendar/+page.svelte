<script lang='ts'>
	import { Button, Heading, Label, P, Span } from 'flowbite-svelte';
	import { SvelteDate } from 'svelte/reactivity';

  let { data } = $props();
  const calendarData = data.groupedByMonth;
  
  // Reactive variables to keep track of the date
  let date = new SvelteDate(); 
  let currentMonth = $derived(String(date.getMonth() + 1).padStart(2, '0'));
  let currentYear = $derived(date.getFullYear());

  let currentEvents = $derived(calendarData[currentYear]?.[currentMonth] || []);
  $inspect(currentEvents, 'Current Events for Month');

  let calendarDays = $derived(attachEventsToDays(generateCalendarDays(date.getFullYear(), date.getMonth()), currentEvents));
  $inspect(calendarDays, 'Calendar Days');

  function changeMonth(offset: number) {
    date.setMonth(date.getMonth() + offset);
  }

  function generateCalendarDays(year: number, month: number) {
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const totalCells = firstDayOfMonth + daysInMonth;
    const totalRows = Math.ceil(totalCells / 7);
    const totalSlots = totalRows * 7;

    const days = [];

    // Previous month padding
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        days.push({
            date: new Date(year, month - 1, prevMonthDays - i),
            currentMonth: false
        });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            date: new Date(year, month, i),
            currentMonth: true
        });
    }

    // Next month padding
    while (days.length < totalSlots) {
        const nextDay: number = days.length - (firstDayOfMonth + daysInMonth) + 1;
        days.push({
            date: new Date(year, month + 1, nextDay),
            currentMonth: false
        });
    }

    return days;
}

function attachEventsToDays(days, events) {
    const eventMap = {};

    events.forEach(event => {
        const dateStr = new Date(event.date).toDateString();
        if (!eventMap[dateStr]) eventMap[dateStr] = [];
        eventMap[dateStr].push(event);
    });

    return days.map(day => ({
        ...day,
        events: eventMap[day.date.toDateString()] || []
    }));
}



</script>

<Heading tag="h1" class="text-2xl font-bold mb-4 text-white text-center">Calendar</Heading>

<Button onclick={() => changeMonth(1)}>Next Month</Button>
<Button onclick={() => changeMonth(-1)}>Previous Month</Button>

<div class="grid grid-cols-7 mt-4 w-full px-2">
  {#each ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as day}
    <div class="text-center font-semibold text-gray-400">{day}</div>
  {/each}
  {#each calendarDays as day}
    <div class="relative p-2 border border-lion-500 min-w-[100px] min-h-[100px] flex items-center justify-center">
      {#if day.currentMonth}
        <div class="absolute top-0 left-0 bg-blue-500 text-white text-xs p-1 rounded-md">
          {day.events.length} events
        </div>
      {/if}
      
      {#if day.currentMonth}
        <div class="text-center font-semibold">{day.date.getDate()}</div>
        {#each day.events as event}
          <div class="absolute top-0 left-0 bg-blue-500 text-white text-xs p-1 rounded-md">
            {event.title}
          </div>
        {/each}
      {:else}
        <Span class="text-gray-400">{day.date.getDate()}</Span>
      {/if}
    </div>
  {/each}
</div>

{#if currentEvents.length === 0}
  <P class="text-gray-500">No events for this month.</P>
{/if}