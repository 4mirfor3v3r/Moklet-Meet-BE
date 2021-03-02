"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MainController_1 = require("./core/controller/MainController");
const App_1 = require("./App");
// List of Controller
const app = new App_1.App([
    new MainController_1.MainController()
]);
app.listen();
//# sourceMappingURL=server.js.map