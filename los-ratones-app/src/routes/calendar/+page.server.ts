export async function load() {
	const res = await fetch(
		'https://tytnkhvjyqbdtvokpjel.supabase.co/storage/v1/object/public/json-data-public//calendar-data.json'
	);
	const calendardata = await res.json();
	const groupedByMonth = calendardata.calendardata.reduce((acc, event) => {
		const date = new Date(event.date);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');

		if (!acc[year]) {
			acc[year] = {};
		}

		if (!acc[year][month]) {
			acc[year][month] = [];
		}

		acc[year][month].push(event);
		return acc;
	}, {});
	return {
		groupedByMonth
	};
}
