/* eslint-env node */

const Canvas = require('canvas');
const fs = require('fs');

const { Image } = Canvas;

/**
 * Create a new canvas object with height and width
 * set to the given values.
 *
 * @param width {number} The width of the canvas.
 * @param height {number} The height of the canvas.
 *
 * @return {Canvas} A canvas object with
 * height and width set to the given values.
 */
function createCanvas(width, height) {
  return new Canvas(width, height);
}

/**
 * Load the image given by the file path, returning
 * a promise to the image represented by the given path.
 *
 * @parm path {string} The path to the image.
 *
 * @return {Image} An image element referring to
 * the given path.
 */
function loadImage(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        return reject(err);
      }
      const image = new Image();
      image.src = data;
      return resolve(image);
    });
  });
}

module.exports = {
  createCanvas,
  loadImage,
};
