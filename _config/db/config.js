const config = {
	server: global.environment.db.host,
	userName: global.environment.db.username,
	password: global.environment.db.password,
	options: {
		camelCaseColumns: true,
		packetSize: 10096,
		requestTimeout: 100000,
		database: global.environment.db.database,
		encrypt: true
	}
}
module.exports = config