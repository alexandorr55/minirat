import { json } from '@sveltejs/kit';
import { serviceRoleKey } from '$env/static/private';

export const POST = async ({ request }) => {
  const body = await request.json();

  const res = await fetch('https://tytnkhvjyqbdtvokpjel.supabase.co/functions/v1/calendar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${serviceRoleKey}`
    },
    body: JSON.stringify(body)
  });

  // Read the response as text only ONCE
  const text = await res.text();

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    parsed = { message: text };
  }

  if (!res.ok) {
    return json({ error: parsed.message || 'Failed to submit event.' }, { status: 500 });
  }

  return json({ message: parsed.message || 'Event submitted successfully!' });
};
