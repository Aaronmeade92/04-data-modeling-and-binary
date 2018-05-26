'use strict'

const parser = require('../lib/parsedBitmap.js');
const readFile = require('../lib/readFile.js');

describe('Parser Module', () => {

    it('construct bitmap from buffer', () => {

        readFile(`${__dirname}/../assets/bitmap.bmp`, (err, buffer) => {

            let bmp = parser(buffer);
            console.log(bmp);
            expect(bmp).toBeDefined();

            expect(bmp).toBe('testing')
                console.log('bitmap', bmp.dibHeader)
        })
    })

    // it('should return console log', () => {

    // })
})