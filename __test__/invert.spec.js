'use strict';

const readFile = require('../lib/readFile.js');
const parser = require('../lib/parsedBitmap.js');
const convert = require('../lib/invert.js');
describe('Parser Module', () => {

  it('construct bitmap from buffer', (done) => {

    readFile(`/Users/joshuamcclung/codefellows/401/04-data-modeling-and-binary/assets/bitmap.bmp`, (err, buffer) => {
      expect(err).toBeNull();
      const bp = parser(buffer);
      const convertedImage = convert(bp);
      expect(convertedImage).toBeDefined();
      expect(typeof bp.dibHeader.width.readInt32LE(18,22) === 'number').toBe(true);
      
      done();

    });
  });
});