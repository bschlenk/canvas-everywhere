class Canvas {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Image {
  constructor() {
    this.events = {};
    this.source = null;
  }

  addEventListener(event, fn) {
    this.events[event] = fn;
  }

  set src(value) {
    this.source = value;
    setImmediate(() => {
      this.events.load();
    });
  }

  get src() {
    return this.source;
  }
}

class ErrorImage extends Image {
  set src(value) {
    this.source = value;
    setImmediate(() => {
      this.events.error(new Error('failed to load image'));
    });
  }
}

Canvas.Image = Image;

module.exports = {
  Canvas,
  Image,
  ErrorImage,
};
