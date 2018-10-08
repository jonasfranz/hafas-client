'use strict'

const createClient = require('../../')
const dbProfile = require('.')

const client = createClient(dbProfile, 'hafas-client-example')

// Berlin Jungfernheide to München Hbf
client.journeys('8011167', '8000261', {results: 1, tickets: true})
// client.departures('8011167', {duration: 1})
// client.arrivals('8011167', {duration: 10, stationLines: true})
// client.locations('Berlin Jungfernheide')
// client.locations('Atze Musiktheater', {poi: true, addressses: false, fuzzy: false})
// client.station('8000309') // Regensburg Hbf
// client.nearby({
// 	type: 'location',
// 	latitude: 52.4751309,
// 	longitude: 13.3656537
// }, {results: 1})
// client.reachableFrom({
// 	type: 'location',
// 	address: '13353 Berlin-Wedding, Torfstr. 17',
// 	latitude: 52.541797,
// 	longitude: 13.350042
// }, {
// 	when: new Date('2018-08-27T10:00:00+0200'),
// 	maxDuration: 50
// })

// client.journeys('8011113', '8000261', {
// 	departure: Date.now() - 2 * 60 * 60 * 1000,
// 	results: 1, stopovers: true, transfers: 1
// })
// .then((js) => {
// 	const leg = js[0].legs.find(l => l.line.product === 'nationalExp')
// 	const prevStopover = leg.stopovers.find((st) => {
// 		return st.departure && new Date(st.departure) < Date.now()
// 	})
// 	return client.journeysFromTrip(leg.id, prevStopover, '8000207')
// })

.then((data) => {
	console.log(require('util').inspect(data, {depth: null, colors: true}))
}, console.error)
