export default class Base {
    
    reply (event, code = 200, msg = 'success', data = {}) {
        const ret = { code, data, msg }
        event.sender.send(`${event.eventName}__reply`, JSON.stringify(ret));
    }

    success (event, data) {
        this.reply(event, 200, 'success', data);
    }

    fail (event, code = 400, msg = 'fail', data) {
        this.reply(event, code, msg, data);
    }
}