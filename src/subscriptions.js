// every service should define a single file that exports Array<Subscription>
// which defines how it interacts with each queue and any filters or options

const CalendarManager = require('./managers/calendar-manager');
const calendarManager = new CalendarManager();

module.exports = [
	{
		name: 'RefreshEarningsCalendar',
		model: 'earnings',
		operation: 'named',
		handler: calendarManager.getLatestEarningsCalendar,
		filters: [],
		options: {},
	},
	{
		name: 'GetLatestCompanyEarningsCalendar',
		model: 'earnings',
		operation: 'named',
		handler: calendarManager.getLatestCompanyEarningsCalendar,
		filters: [],
		options: {},
	},
];