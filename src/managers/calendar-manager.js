class CalendarManager {
	constructor() {}

	// for each company creates a job to crawl integrations
	// for the latest earnings that can be found. creating
	// these will create scheduled jobs for
	async getLatestEarningsCalendar (job) {

	}

	async getLatestCompanyEarningsEvents (job) {
		// job contains company e.g. job.data._id is the companies ticker
		// use ticker to fetch earnings calendar using metadata-service
		// create new earnings for each 
		
		// todo: implement earnings model for storing events
		// related to earnings for a company
		// todo: check for last time earnings refreshed
		// todo: check if earnings have been refreshed today

		// for each company, create a job for the GetLatestCompanyEarningsCalendar queue

		// latestCompanyEarningsQueue.add({ company })
	}
}

module.exports = CalendarManager;