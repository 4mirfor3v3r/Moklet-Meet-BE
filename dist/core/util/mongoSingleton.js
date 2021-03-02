"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoSingleton = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MongoSingleton {
    constructor() {
        this._dbUrl =
            'mongodb://jelajah-rasa:Z7qYFMa6NqMweiTq@kotlin-rest-api-shard-00-00.7khep.mongodb.net:27017,kotlin-rest-api-shard-00-01.7khep.mongodb.net:27017,kotlin-rest-api-shard-00-02.7khep.mongodb.net:27017/dbJitsiMeet?ssl=true&replicaSet=Kotlin-rest-api-shard-0&authSource=admin&retryWrites=true&w=majority';
    }
    connect() {
        mongoose_1.default.set('debug', true);
        mongoose_1.default
            .connect(this._dbUrl, {
            useNewUrlParser: true,
        })
            .then(() => console.log(`Connected to Database. Use ${process.env.NODE_ENV || `Default`} Environment`))
            .catch((err) => {
            console.log(`something wrong ${err}`);
        });
    }
}
exports.MongoSingleton = MongoSingleton;
//# sourceMappingURL=mongoSingleton.js.map