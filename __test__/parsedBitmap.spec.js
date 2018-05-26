'use strict';

const parser = require('../lib/parsedBitmap.js');
const readFile = require('../lib/readFile.js');

describe('Parser Module', () => {

  it('construct bitmap from buffer', (done) => {

    readFile(`${__dirname}/../assets/bitmap.bmp`, (err, buffer) => {
      expect(err).toBeNull();
      // let bmp = parser(buffer);
      // expect(bmp).toBeDefined();
      // expect(bmp).toBe('testing');
      const bp = parser(buffer);
      // expect(buffer).toBeDefined();
      // expect(buffer.readInt32LE(28,30)).toBe(8);
      expect(bp).toBeDefined();
      expect(typeof bp.dibHeader.width.readInt32LE(18,22) === 'number').toBe(true);
      done();
    });
  });

  // it('should return console log', () => {

  // })
});