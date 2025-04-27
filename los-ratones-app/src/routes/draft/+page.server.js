export async function load() {
  const res = await fetch("https://tytnkhvjyqbdtvokpjel.supabase.co/storage/v1/object/public/json-data-public//drafts-data.json");
  const draftdata = await res.json();
  console.log("draftdata:", draftdata);
  return {
    draftdata
  };
}
