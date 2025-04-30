export async function load() {
  const res = await fetch("https://tytnkhvjyqbdtvokpjel.supabase.co/storage/v1/object/public/json-data-public//calendar-data.json");
  const calendardata = await res.json();
  console.log("calendardata:", calendardata);
  return {
    calendardata
  };
}
