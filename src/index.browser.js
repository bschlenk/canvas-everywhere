/* eslint-env browser */

/**
 * Create a new canvas dom element with height and width
 * set to the given values.
 *
 * @param width {number} The width of the canvas.
 * @param height {number} The height of the canvas.
 *
 * @return {HTMLCanvasElement} A canvas dom element with
 * height and width set to the given values.
 */
function createCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

/**
 * Load the given url returning a promise to the
 * image represented by the given url.
 *
 * @parm src {string} The url to the image.
 *
 * @return {HTMLImageElement} An image element
 * referring to the given url.
 */
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new window.Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', err => reject(err));
    image.src = src;
  });
}

module.exports = {
  createCanvas,
  loadImage,
};

