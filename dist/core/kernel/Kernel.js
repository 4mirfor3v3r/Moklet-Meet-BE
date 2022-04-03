"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kernel = void 0;
const Kernel_App_Use_1 = require("./Kernel.App.Use");
const express_1 = __importDefault(require("express"));
const port = process.env.PORT || 19003;
class Kernel {
    constructor() {
        this._defaultApps = (0, express_1.default)();
        this._defaultAppUse = new Kernel_App_Use_1.AppUse(this._defaultApps);
    }
    appService() {
        this._defaultApps.listen(port, () => {
            console.log(`aplikasi ini berjalan di port ${port}`);
        });
    }
}
exports.Kernel = Kernel;
//# sourceMappingURL=Kernel.js.map