import fs from 'fs';
// import { exec } from 'child_process';

import SVGIcons2SVGFontStream from 'svgicons2svgfont';
import svg2ttf from 'svg2ttf';
import ttf2eot from 'ttf2eot';
import ttf2woff from 'ttf2woff';
import ttf2woff2 from 'ttf2woff2';
import ejs from 'ejs';

import Base from './Base';

export default class Controller extends Base {

    constructor () {
        super();
        this.path = {
            svg: 'workspace/iconfont.svg',
            ttf: 'workspace/iconfont.ttf',
            eot: 'workspace/iconfont.eot',
            woff: 'workspace/iconfont.woff',
            woff2: 'workspace/iconfont.woff2',
            css: 'workspace/iconfont.css',
            demoHtml: 'workspace/demo.html',
            demoCss: 'workspace/demo.css',
        };
        this.tpl = {
            css: 'workspace/iconfont.css',
            demoHtml: 'workspace/demo.html',
            demoCss: 'workspace/demo.css',
        }
    }

    async createFont (event, params) {
        const { fileList } = params;

        try {
            const svgPath = this.path.svg;
            const ttfpath = this.path.ttf;

            const fontData = await this.createSvgFont(fileList, svgPath);
            await this.svg2ttf(svgPath, ttfpath);
            const fontsBuff = await this.ttf2eotAndwoff(ttfpath, this.path.eot, this.path.woff, this.path.woff2);
            fontData.base64 = fontsBuff[2].toString('base64');
            this.createDemo(fontData);

        } catch (error) {
            // todo 输出错误
            console.log(error);
        }

        this.success(event);
    }

    // 将单个的svg转换为一个svg文件
    createSvgFont (fileList, destPath) {
        return new Promise ((resolve, reject) => {
            let metadatas = [];
            const fontStream = new SVGIcons2SVGFontStream({
                fontName: 'iconfont'
            });
            const startEncode = '\uE001';
            fontStream.pipe(fs.createWriteStream(destPath)) // 暂时写到硬盘中，以后改为存内存
                .on('finish', (...args) => {
                    resolve({
                        metadatas,
                        fontName: 'iconfont'
                    });
                })
                .on('error', (...args) => {
                    reject();
                });
            fileList.forEach((item, index) => {
                let readStream = fs.createReadStream(item);
                let code = this.unicodeAdd(startEncode, index);
                readStream.metadata = {
                    unicode: [code.unicode],
                    name: `icon${index}`
                };
                metadatas[index] = {
                    hex: code.hex,
                    name: `icon${index}`
                }
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
                    return resolve(ttf);
                });
            });
        });
    }

    ttf2eot (ttfPath, destPath) {
        return new Promise((resolve, reject) => {
            fs.readFile(ttfPath, (err, file) => {
                if (err) return reject(err);
                const ttf = new Uint8Array(file);
                const eot = Buffer.from(ttf2eot(ttf).buffer);
                fs.writeFile(destPath, eot, (err) => {
                    if (err) return reject(err);
                    return resolve(eot);
                });
            });
        });
    }

    ttf2woff (ttfPath, destPath) {
        return new Promise((resolve, reject) => {
            fs.readFile(ttfPath, (err, file) => {
                if (err) return reject(err);
                const ttf = new Uint8Array(file);
                const woff = Buffer.from(ttf2woff(ttf).buffer);
                fs.writeFile(destPath, woff, (err) => {
                    if (err) return reject(err);
                    return resolve(woff);
                });
            });
        });
    }

    ttf2woff (ttfPath, destPath) {
        return new Promise((resolve, reject) => {
            fs.readFile(ttfPath, (err, file) => {
                if (err) return reject(err);
                const ttf = new Uint8Array(file);
                const woff2 = Buffer.from(ttf2woff2(ttf).buffer);
                fs.writeFile(destPath, woff2, (err) => {
                    if (err) return reject(err);
                    return resolve(woff2);
                });
            });
        });
    }

    ttf2eotAndwoff (ttfPath, eotPath, woffPath, woff2Path) {
        return new Promise((resolve, reject) => {
            fs.readFile(ttfPath, (err, file) => {
                if (err) return reject(err);
                const ttf = new Uint8Array(file);
                const woff = Buffer.from(ttf2woff(ttf).buffer);
                const woff2 = Buffer.from(ttf2woff(ttf).buffer);
                const eot = Buffer.from(ttf2eot(ttf).buffer);
                const writeFile = (dist, buff) => new Promise((resolve, reject) => {
                    fs.readFile(dist, buff, err => {
                        if (err) return reject(err);
                        resolve();
                    })
                });
                Promise.all([
                    writeFile(eotPath, eot),
                    writeFile(woffPath, woff),
                    writeFile(woff2Path, woff2),
                ]).then(() => resolve([eot, woff, woff2]));
            });
        });
    }

    unicodeAdd (unicode, num) {
        const charCode = unicode.charCodeAt(0) + num;
        const hex = charCode.toString(16);
        const retUnicode = String.fromCharCode(charCode);
        return {
            hex, unicode: retUnicode
        };
    }

    // 创建demo用例
    async createDemo (fontData) {
        const writeFile = (path, content, options = {}) => new Promise((resolve, reject) => {
            fs.writeFile(path, content, options, err => {
                if (err) return reject(err);
                resolve();
            })
        });

        const readFile = (path, options) => new Promise((resolve, reject) => {
            fs.readFile(path, options = 'utf-8', (err, ctn) => {
                if (err) return reject(err);
                resolve(ctn);
            });
        });

        try {
            const [
                demoCss,
                iconfontCssTpl,
                demoHtmlTpl
            ] = await Promise.all([
                readFile('./src/main/tmpls/demo.css'),
                readFile('./src/main/tmpls/iconfont.css'),
                readFile('./src/main/tmpls/demo.html')
            ]);

            const iconfontCss = ejs.render(iconfontCssTpl, fontData);
            const demoHtml = ejs.render(demoHtmlTpl, fontData);

            await [
                writeFile(this.path.demoCss, demoCss),
                writeFile(this.path.css, iconfontCss),
                writeFile(this.path.demoHtml, demoHtml)
            ];
        } catch (err) {
            throw err;
        }
    }

}