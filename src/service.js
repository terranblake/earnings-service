const { EventFramework } = require('@postilion/event-framework');
const subscriptions = require('./subscriptions');

const url = process.env.MONGODB;
const events = new EventFramework(url, subscriptions);
module.exports = events;