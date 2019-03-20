import { dialog } from 'electron';
import Base from './Base';

export default class Controller extends Base {
    createFont (event) {
        dialog.showOpenDialog({
            filters: [{
                name: 'svg',
                extensions: ['svg']
            }],
            properties: ['openFile', 'multiSelections'],
        }, (files) => {
            if (!files) return;
            this.success(event, {files: files});
        });
    }
}