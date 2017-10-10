# Canvas Everywhere

A library intended to simplify creating
other libraries that draw onto a canvas.

## Installation

`npm install canvas-everywhere`

## Overview

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

const canvas = createCanvas(400, 600);
canvas.fillRect('#baddad');

loadImage('path/to/image.png').then((img) => {
  canvas.drawImage(img);
});

```
