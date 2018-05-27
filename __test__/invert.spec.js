'use strict';

const parser = require('../lib/parsedBitmap.js');
const readFile = require('../lib/readFile.js');
const inverter = require('../lib/invert.js');
describe('Parser Module', () => {

  it('construct bitmap from buffer', (done) => {

    readFile(`${__dirname}/../assets/bitmap.bmp`, (err, buffer) => {
      expect(err).toBeNull();
      const bp = inverter(buffer);
      expect(bp).toBeDefined();
      expect(typeof bp.dibHeader.width.readInt32LE(18,22) === 'number').toBe(true);
      
      done();

    });
  });
});