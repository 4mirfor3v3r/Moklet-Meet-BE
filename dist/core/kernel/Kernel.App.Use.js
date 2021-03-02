"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUse = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
class AppUse {
    constructor(app) {
        this.app = app;
        this.setup();
    }
    setup() {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
}
exports.AppUse = AppUse;
//# sourceMappingURL=Kernel.App.Use.js.map