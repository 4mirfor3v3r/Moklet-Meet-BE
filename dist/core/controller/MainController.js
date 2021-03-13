"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
const MainWorker_1 = require("./../worker/MainWorker");
const express_1 = __importDefault(require("express"));
const crypto_1 = require("crypto");
class MainController {
    constructor() {
        this.path = '/meet';
        this.router = express_1.default.Router();
        this.ping = (req, res) => {
            return res.send(this._worker.ping());
        };
        this.insert = (req, res) => {
            var name = req.body.name;
            var creator = req.body.creator;
            var startDate = req.body.start_date;
            var endDate = req.body.end_date;
            var data = {
                name: name,
                creator: creator,
                url: `https://meet.jit.si/mm-${crypto_1.randomInt(1000).toString()}`,
                start_date: startDate,
                end_date: endDate,
            };
            return this._worker
                .insertNewMeet(data)
                .then((data) => {
                res.json(data);
            })
                .catch((err) => {
                res.json(err);
            });
        };
        this.getAll = (req, res) => {
            return this._worker
                .getAllMeet()
                .then((data) => {
                res.json(data);
            })
                .catch((err) => {
                res.json(err);
            });
        };
        this._worker = new MainWorker_1.MainWorker();
        this.initRouter();
    }
    initRouter() {
        this.router.get(`${this.path}/ping`, this.ping);
        this.router.post(`${this.path}/insert`, this.insert);
        this.router.get(`${this.path}/getAll`, this.getAll);
    }
}
exports.MainController = MainController;
//# sourceMappingURL=MainController.js.map