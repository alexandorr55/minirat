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

export type EventType = 'of' | 'sc' | 'va'; // Official, Scrims, Variety

export type ScoreEntry {
  lr_score: string;          // maybe they should be ints idk
  opponent_score: string;
  opponent_name: string;
}

export type CalendarEvent {
  event_type: EventType;
  date: string;              // maybe this sound be DateTime_UTC idk
  description: string;
  scores: ScoreEntry[];     // see above
}

export type CalendarData {
  calendardata: CalendarEvent[];
}