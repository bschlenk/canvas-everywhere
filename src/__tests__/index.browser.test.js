/* global document */
/* eslint-env node, jest */

const { ErrorImage } = require('./helpers/mocks');
const { createCanvas, loadImage } = require('../index.browser');

describe('index.browser', () => {
  describe('createCanvas', () => {
    const spy = jest.spyOn(document, 'createElement');

    it('should create a canvas using document.createElement', () => {
      const canvas = createCanvas(400, 600);
      expect(spy).toBeCalledWith('canvas');
      expect(canvas).toBeDefined();
      expect(canvas.width).toEqual(400);
      expect(canvas.height).toEqual(600);
    });
  });

  describe('loadImage', () => {
    it('should load the given url and return the image as a promise', () =>
      loadImage('/path/to/image.png').then((image) => {
        expect(image).toBeDefined();
        expect(image.src).toEqual('/path/to/image.png');
      }));

    it('should return a rejected promise if there is an error', (done) => {
      global.Image = ErrorImage;

      loadImage('/path/to/image.png')
        .then(() => done(new Error('Expected an error')))
        .catch((err) => {
          expect(err).toBeDefined();
          expect(err.message).toEqual('failed to load image');
          done();
        });
    });
  });
});
