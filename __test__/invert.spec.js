'use strict';

const readFile = require('../lib/readFile.js');
const parser = require('../lib/parsedBitmap.js');
const invert = require('../lib/invert.js');
describe('Parser Module', () => {

  it('construct bitmap from buffer', (done) => {

    readFile(`/Users/joshuamcclung/codefellows/401/04-data-modeling-and-binary/assets/bitmap.bmp`, (err, buffer) => {
      expect(err).toBeNull();
      console.log(buffer);
      const bp = parser(buffer);
      console.log(bp);
      const invertedImage = invert(bp);
      console.log(invertedImage);
      expect(invertedImage).toBeDefined();
      expect(typeof bp.dibHeader.width.readInt32LE(18,22) === 'number').toBe(true);
      
      done();

    });
  });
});