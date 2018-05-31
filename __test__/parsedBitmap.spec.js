'use strict';

const parser = require('../lib/parsedBitmap.js');
const readFile = require('../lib/readFile.js');

describe('Parser Module', () => {

  it('construct bitmap from buffer', (done) => {

    readFile(`/Users/joshuamcclung/codefellows/401/04-data-modeling-and-binary/assets/bitmap.bmp`, (err, buffer) => {
      expect(err).toBeNull();
      const bp = parser(buffer);
      expect(bp).toBeDefined();
      expect(typeof bp.pixelArray.readInt32LE(18,22) === 'number').toBe(true);
      
      done();
    });
  });

});