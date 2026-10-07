const dateFormat = new Intl.DateTimeFormat('en-US', {
	month: 'long',
	day: 'numeric',
	year: 'numeric',
	timeZone: 'UTC'
});

export function formatDate(isoDate: string) {
	return dateFormat.format(new Date(isoDate));
}
