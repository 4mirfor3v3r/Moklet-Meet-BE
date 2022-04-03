import mongoose from 'mongoose';
export class MongoSingleton {
	_dbUrl: string;
	constructor() {
		this._dbUrl = "mongodb+srv://public:public@amirlabs-db.nahxg.mongodb.net/dbJitsiMeet?retryWrites=true&w=majority";
	}

	connect() {
		mongoose.set('debug', true);
		mongoose
			.connect(this._dbUrl, {
				useNewUrlParser: true,
			})
			.then(() => console.log(`Connected to Database. Use ${process.env.NODE_ENV || `Default`} Environment`))
			.catch((err) => {
				console.log(`something wrong ${err}`);
			});
	}
}
