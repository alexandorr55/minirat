export async function load() {
  const res = await fetch("https://tytnkhvjyqbdtvokpjel.supabase.co/storage/v1/object/public/json-data-public/champs-data.json");
  const champUsage = await res.json();
  console.log("champusage:", champUsage);
  return {
    champUsage
  };
}
