import fs from 'fs';

import SVGIcons2SVGFontStream from 'svgicons2svgfont';
import svg2ttf from 'svg2ttf';
import ttf2eot from 'ttf2eot';
import ttf2woff from 'ttf2woff';
import Base from './Base';

export default class Controller extends Base {
    async createFont (event, params) {
        const { fileList } = params;

        try {
            await this.createSvgFont(fileList);
        } catch (error) {
            // todo 输出错误
            console.log(error);
        }

        this.success(event);
    }

    createSvgFont (fileList) {
        return new Promise ((resolve, reject) => {
            const fontStream = new SVGIcons2SVGFontStream({
                fontName: 'hello'
            });
            const startEncode = '\uE001';
            fontStream.pipe(fs.createWriteStream('fonts/test.svg'))
                .on('finish', (...args) => {
                    resolve();
                })
                .on('error', (...args) => {
                    reject();
                });
            fileList.forEach((item, index) => {
                let readStream = fs.createReadStream(item);
                let unicode = this.unicodeAdd(startEncode, index);
                readStream.metadata = {
                    unicode: [this.unicodeAdd(startEncode, index)],
                    name: `icon${index}`
                };
                fontStream.write(readStream);
            });

            fontStream.end();
        });
    }

    unicodeAdd (unicode, num) {
        return `\\u${(unicode.charCodeAt(0) + num).toString(16).toUpperCase()}`;
    }

}