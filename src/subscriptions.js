// every service should define a single file that exports Array<Subscription>
// which defines how it interacts with each queue and any filters or options

const models = require('@postilion/models');
const { Operation } = require('@postilion/event-framework');

const CalendarManager = require('./managers/calendar-manager');
const calendarManager = new CalendarManager();

module.exports = [
	{
		name: 'SyncCompanyEarningsEvents',
		model: models.Company,
		operation: Operation.named,
		handler: calendarManager.getLatestCompanyEarningsEvents,
		filters: [],
		options: {},
	},
];