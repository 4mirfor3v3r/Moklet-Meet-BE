import { MainWorker } from './../worker/MainWorker';
import { IMeet } from './../model/Meet';
import { IController } from './../shared/IController';
import express from 'express';
export class MainController implements IController {
	path = '/meet';
	router = express.Router();
	_worker: MainWorker;
	constructor() {
		this._worker = new MainWorker();
		this.initRouter();
	}
	initRouter() {
		this.router.get(`${this.path}/ping`, this.ping);
		this.router.post(`${this.path}/insert`, this.insert);
		this.router.get(`${this.path}/getAll`, this.getAll);
	}

	private ping = (req: express.Request, res: express.Response) => {
		return res.send(this._worker.ping());
	};
	private insert = (req: express.Request, res: express.Response) => {
		var name = req.body.name;
		var creator = req.body.creator;
		var url = req.body.url;
		var startDate = req.body.start_date;
		var endDate = req.body.end_date;

		var data: IMeet = {
			name: name,
			creator: creator,
			url: url,
			start_date: startDate,
			end_date: endDate
		};

		return this._worker
			.insertNewMeet(data)
			.then((data) => {
				res.json(data);
			})
			.catch((err: Error) => {
				res.json(err);
			});
	};
	private getAll = (req: express.Request, res: express.Response) => {
		return this._worker
			.getAllMeet()
			.then((data) => {
				res.json(data);
			})
			.catch((err: Error) => {
				res.json(err);
			});
	};
}
