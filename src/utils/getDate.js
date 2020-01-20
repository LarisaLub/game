export default (date) => {
	const d = new Date(date);
	const calendarDate = [ d.getDate(), d.getMonth() + 1, d.getFullYear() ].join(':');
	const time = [ d.getHours(), d.getMinutes(), d.getSeconds() ].join(' : ');
	return `${calendarDate} ${time}`;
};
