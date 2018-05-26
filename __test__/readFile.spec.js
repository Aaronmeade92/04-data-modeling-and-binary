'use strict';

const reader = require('../src/lib/readFile.js');

describe('Reader Module', () => {
  it('if there is a bad file name throw eror', () => {

    let file = `${__dirname}/assets/fail.bmp`;

    reader(file, (err) => {

      expect(err).toBeDefined();

    });
  });
});