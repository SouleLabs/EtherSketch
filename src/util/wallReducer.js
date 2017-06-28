import { WALL_IMAGE_LOAD } from "./loadWallImage";
import _ from "lodash";

const sampleImageBlock =
  "data:image/png;base64," +
  "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAQUlEQVQY062NoQ0AIBDEeijG" +
  "YBD2n4MxcIf4EMSTYKiquPSgO7iKbFMHwGwkCg926gLI9pmml5/x9PKIy0AEpCwL4ARhH6fZ" +
  "DUYAAAAASUVORK5CYII=";

function randomBlocks() {
  const array = _.fill(Array(10000), null);
  for (let i = 0; i <= 1000; i++) {
    const index = _.random(0, 9999);
    array[index] = sampleImageBlock;
  }
  return array;
}

const initialState = {
  image: { status: "pending" },
  blocks: {
    status: "success",
    data: randomBlocks()
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
