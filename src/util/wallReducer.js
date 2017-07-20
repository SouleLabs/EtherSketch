import { WALL_IMAGE_LOAD } from "./loadWallImage";
import _ from "lodash";
import loremIpsum from "lorem-ipsum";

const WIDTH = 1000;
const HEIGHT = 1000;

function randomPixels() {
  const pixels = [];
  for (let x = 0; x < WIDTH; x++) {
    for (let y = 0; y < HEIGHT; y++) {
      const text = loremIpsum({
        count: 1,
        units: "sentences",
        sentenceLowerBound: 3,
        sentenceUpperBound: 8
      });
      const sample = {
        text: text,
        url: `http://example.com/ethersketch/${x}/${y}`
      };
      sample.x = x;
      sample.y = y;
      if (x % 256 < 1 || x % 256 > 254 || y % 256 < 1 || y % 256 > 254) {
        sample.red = 0;
        sample.green = 0;
        sample.blue = 0;
      } else {
        sample.red = x % 256;
        sample.green = y % 256;
        sample.blue = x * y % 256;
      }
      pixels.push(sample);
    }
  }
  return pixels;
}

const initialState = {
  image: { status: "pending" },
  pixels: {
    status: "success",
    data: randomPixels(),
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
