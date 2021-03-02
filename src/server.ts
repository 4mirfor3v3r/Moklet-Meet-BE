import { MainController } from './core/controller/MainController';
import { App } from './App'

// List of Controller
const app = new App([
    new MainController()
])
app.listen()