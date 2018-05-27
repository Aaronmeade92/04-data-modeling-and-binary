'use strict';

const parser = require('../lib/parsedBitmap.js');
const readFile = require('../lib/readFile.js');
const inverter = require('../lib/invert.js');
describe('Parser Module', () => {

  it('construct bitmap from buffer', (done) => {

    readFile(`${__dirname}/../assets/bitmap.bmp`, (err, buffer) => {
      expect(err).toBeNull();
      const bp = parser(buffer);
      console.log(bp);
      console.log(buffer);
      const invertedImage = inverter(bp);
      console.log(invertedImage);
      expect(bp).toBeDefined();
      expect(typeof bp.dibHeader.width.readInt32LE(18,22) === 'number').toBe(true);
      
      done();

    });
  });
});