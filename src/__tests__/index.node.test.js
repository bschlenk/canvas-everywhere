/* eslint-env node, jest */

const { join } = require('path');
const { createCanvas, loadImage } = require('../index.node');

describe('index.node', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('createCanvas', () => {
    it('should return a canvas with width and height set', () => {
      const canvas = createCanvas(600, 800);
      expect(canvas).toBeDefined();
      expect(canvas.width).toEqual(600);
      expect(canvas.height).toEqual(800);
    });
  });

  describe('loadImage', () => {
    it('should load the given path and return the image as a promise', () =>
      loadImage(join(__dirname, 'data', 'testimage.jpg')).then((image) => {
        expect(image).toBeDefined();
        const description = image.inspect();
        const [, width, height] = /(\d+)x(\d+)/.exec(description);
        expect(width).toEqual('480');
        expect(height).toEqual('270');
      }));

    it('should return a rejected promise if there is an error loading the file', (done) => {
      loadImage(join(__dirname, 'data', 'nonexistentfile.png')).then(() => {
        done(new Error('Expected an error'));
      }).catch((err) => {
        expect(err).toBeDefined();
        done();
      });
    });

    it('should return a rejected promise if there is an error loading the image', (done) => {
      loadImage(join(__dirname, 'data', 'notanimage.txt')).then(() => {
        done(new Error('Expected an error'));
      }).catch((err) => {
        expect(err).toBeDefined();
        done();
      });
    });
  });
});
