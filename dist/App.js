"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const mongoSingleton_1 = require("./core/util/mongoSingleton");
const Kernel_1 = require("./core/kernel/Kernel");
class App {
    constructor(_c) {
        this._kernel = new Kernel_1.Kernel();
        this._mongoSingleton = new mongoSingleton_1.MongoSingleton();
        this.initController(_c);
        this.connectStorage();
    }
    initController(_c) {
        _c.forEach((controller) => {
            this._kernel._defaultApps.use('/api/v1', controller.router);
        });
    }
    connectStorage() {
        this._mongoSingleton.connect();
    }
    listen() {
        this._kernel.appService();
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map