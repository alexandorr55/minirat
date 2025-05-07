export const months = {
	1: 'January',
	2: 'February',
	3: 'March',
	4: 'April',
	5: 'May',
	6: 'June',
	7: 'July',
	8: 'August',
	9: 'September',
	10: 'October',
	11: 'November',
	12: 'December'
} as const;

export function getMonthName(month: number): string {
	if (month < 1 || month > 12) {
		throw new Error('Invalid month number. Must be between 1 and 12.');
	}
	return months[month as keyof typeof months];
}
