"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainWorker = void 0;
const BaseResponse_1 = require("./../util/BaseResponse");
const Meet_1 = require("./../model/Meet");
class MainWorker {
    getAllMeet() {
        return new Promise((resolve, reject) => {
            Meet_1.MMeet.find().then((data) => {
                resolve(BaseResponse_1.BaseResponse.success(data));
            }).catch((e) => {
                reject(BaseResponse_1.BaseResponse.error(e.message));
            });
        });
    }
    insertNewMeet(meet) {
        return new Promise((resolve, reject) => {
            Meet_1.MMeet.create(meet).then(data => {
                resolve(BaseResponse_1.BaseResponse.success(data));
            }).catch((err) => {
                reject(BaseResponse_1.BaseResponse.error(err.message));
            });
        });
    }
    ping() {
        return 'Pong';
    }
}
exports.MainWorker = MainWorker;
//# sourceMappingURL=MainWorker.js.map