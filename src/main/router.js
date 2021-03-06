import { ipcMain } from 'electron';
import SelectFile from './controllers/SelectFile';
import CreateFont from './controllers/CreateFont';

class Router {
    constructor () {
        this.controller = {}
    }
    register (name, controller, route = {}) {
        this.controller[name] = controller;

        for (let eventName in route) {
            this.route(eventName, controller, route[eventName]);
        }
    }
    route (eventName, ctrl, method) {

        if (typeof ctrl === 'string') ctrl = this.controller[ctrl];

        ipcMain.on(eventName, function (event, ...args) {
            event.eventName = eventName;
            ctrl[method](event, ...args);
        });
    }
}

export default function () {
    const router = new Router();

    router.register('SelectFile', new SelectFile(), {
        'selectSvgFile': 'selectSvgFile'
    });

    router.register('CreateFont', new CreateFont(), {
        'createFont': 'createFont'
    });

}