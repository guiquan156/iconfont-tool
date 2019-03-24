import { ipcRenderer } from 'electron';

export function send (name, opts) {
    const {success, fail, complete, ...args} = opts;

    ipcRenderer.send(name, {...args});

    ipcRenderer.once(`${name}__reply`, function (event, response) {
        const res = JSON.parse(response);

        if (res.code == 200) {
            success && success(event, res);
        } else {
            fail && fail(event, res);
        }
        complete && complete(event, res);
    });
}