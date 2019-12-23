class CalendarManager {
	constructor() {}

	// for each company creates a job to crawl integrations
	// for the latest earnings that can be found. creating
	// these will create scheduled jobs for 
	async getLatestEarningsCalendar (job) {
		// get all companies
		// todo: check for last time earnings refreshed
		// for each company, create a job for the GetLatestCompanyEarningsCalendar queue
	}

	async getLatestCompanyEarningsCalendar (job) {
		// job contains company e.g. job.data._id is the companies ticker
		// use ticker to fetch earnings calendar using metadata-service
		// create new earnings for each 
	}
}

module.exports = CalendarManager;