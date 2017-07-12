import { WALL_IMAGE_LOAD } from "./loadWallImage";
import _ from "lodash";

const WIDTH = 1000;
const HEIGHT = 1000;

const examplePixel = {
  red: 255,
  green: 7,
  blue: 7,
  text: "This is just an example!",
  url: "http://example.com/ethersketch"
};

function randomPixels() {
  const pixels = [];
  for (let i = 0; i <= WIDTH * HEIGHT / 2; i++) {
    const sample = _.clone(examplePixel);
    sample.x = _.random(0, WIDTH - 1);
    sample.y = _.random(0, HEIGHT - 1);
    pixels.push(sample);
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
