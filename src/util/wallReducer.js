import { WALL_IMAGE_LOAD } from "./loadWallImage";
import _ from "lodash";
import loremIpsum from "lorem-ipsum";

const WIDTH = 1000;
const HEIGHT = 1000;

function emptyPixelsData() {
  const pixels = [];
  for (let x = 0; x < WIDTH; x++) {
    for (let y = 0; y < HEIGHT; y++) {
      pixels.push(null);
    }
  }
  return pixels;
}

function stripePixels(pixels, pos, size, sample) {
  for (let x = pos.x; x < pos.x + size.width; x++) {
    for (let y = pos.y; y < pos.y + size.height; y++) {
      const index = x * WIDTH + y;
      const newPixel = _.clone(sample);
      newPixel.x = x;
      newPixel.y = y;
      pixels[index] = newPixel;
    }
  }
}

function burstStripePixels(pixels, sample) {
  const total = _.random(2, 5);
  stripePixels(
    pixels,
    { x: 0, y: 0 },
    { width: 50, height: 50 },
    {
      text: "Upper left corner",
      url: "http://example.com/upperleft",
      red: 250,
      green: 250,
      blue: 10
    }
  );
  for (let count = 0; count < total; count++) {
    const size = {
      width: _.random(25, 50),
      height: _.random(50, 100)
    };
    const pos = {
      x: _.random(0, WIDTH - size.width),
      y: _.random(0, HEIGHT - size.height)
    };
    stripePixels(pixels, pos, size, sample);
  }
  stripePixels(
    pixels,
    { x: WIDTH - 50, y: HEIGHT - 50 },
    { width: 50, height: 50 },
    {
      text: "Borrom rightr corner",
      url: "http://example.com/upperleft",
      red: 50,
      green: 50,
      blue: 50
    }
  );
}

function stripeAll(pixels) {
  const total = 100;
  for (let count = 0; count < total; count++) {
    const text = loremIpsum({
      count: 1,
      units: "sentences",
      sentenceLowerBound: 3,
      sentenceUpperBound: 8
    });
    const sample = {
      text: text,
      url: `http://example.com/ethersketch/`,
      red: _.random(10, 240),
      green: _.random(10, 240),
      blue: _.random(10, 240)
    };
    burstStripePixels(pixels, sample);
  }
  return pixels;
}

const initialState = {
  image: { status: "pending" },
  pixels: {
    status: "success",
    data: stripeAll(emptyPixelsData()),
    width: WIDTH,
    height: HEIGHT
  }
};

const wallReducer = (state = initialState, action) => {
  if (action.type === WALL_IMAGE_LOAD) {
    const { status, data } = action.payload;
    return { ...state, image: { status, data } };
  }

  return state;
};

export default wallReducer;
