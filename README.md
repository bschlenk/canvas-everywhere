# Canvas Everywhere

A library intended to simplify creating
other libraries that draw onto a canvas.

## Installation

`npm install canvas-everywhere`

If running on node, also install `canvas`:

`npm install canvas`

## Overview

Canvas everywhere is a simple wrapper around canvas that allows
libraries that rely on canvas to be written in a platform agnostic
manner. When running on node, the `canvas` library will be used. When
running in the browser, `document.createElement('canvas')` will be used.

Canvas everywhere relies on having `canvas` installed when using with
node. `Canvas` is is marked as a peer dependency, but note that it is
only required for node - when used in a browser context, a canvas dom
element will be created instead.

## Usage

```js

// commonjs
const { createCanvas, loadImage } = requrie('canvas-everywhere');

// es module
import { createCanvas, loadImage } from 'canvas-everywhere';

// initial width and height must be given, but they can be changed
// later by setting the width and height properties of the canvas.
const canvas = createCanvas(400, 600);
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#baddad';
ctx.fillRect(0, 0, canvas.width, canvas.height);

loadImage('path/to/image.png').then((img) => {
  ctx.drawImage(img, 0, 0);
});

```

## Testing

`npm run test`

This runs the test suite using jest. `canvas` must be installed in order
for the tests to pass.
