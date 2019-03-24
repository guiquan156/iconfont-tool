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
            const svgPath = 'workspace/svg.svg';
            await this.createSvgFont(fileList, svgPath);
            await this.svg2ttf(svgPath, 'workspace/ttf.ttf');
        } catch (error) {
            // todo 输出错误
            console.log(error);
        }

        this.success(event);
    }

    // 将单个的svg转换为一个svg文件
    createSvgFont (fileList, destPath) {
        return new Promise ((resolve, reject) => {
            const fontStream = new SVGIcons2SVGFontStream({
                fontName: 'hello'
            });
            const startEncode = '\uE001';
            fontStream.pipe(fs.createWriteStream(destPath)) // 暂时写到硬盘中，以后改为存内存
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
                    unicode: [unicode],
                    name: `icon${index}`
                };
                fontStream.write(readStream);
            });

            fontStream.end();
        });
    }

    // svg文件转换为ttf文件
    svg2ttf (svgPath, destPath) {
        return new Promise((resolve, reject) => {
            fs.readFile(svgPath, 'utf-8', (err, file) => {
                if (err) return reject(err);
                const ttf = svg2ttf(file, {});
                fs.writeFile(destPath, Buffer.from(ttf.buffer), (err) => {
                    if (err) return reject(err);
                    return resolve();
                });
            });
        });
    }

    unicodeAdd (unicode, num) {
        return `\\u${(unicode.charCodeAt(0) + num).toString(16).toUpperCase()}`;
    }

}