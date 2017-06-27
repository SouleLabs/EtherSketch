import { WALL_IMAGE_LOAD } from "./loadWallImage";
import _ from "lodash";

const sampleImageBlock =
  "data:image/png;base64," +
  "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpw" +
  "YAAAAB3RJTUUH4QYWDgUZ+Hzu6wAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUF" +
  "eBDhcAAADUSURBVBjTLYxBloUgDMBoaRGQ57//CV24UQEFpDgLZ5vkBdZ1jTGe57ltW845p" +
  "dRaAwBmnueZaq2llH3fj+M4jiPn/DwPIk7TNMag1lqMMeccY4wx3vddayWiLyIReZ7no6WU" +
  "67re9xURAOi9o4j03kVkjPG+7+eUUgCgtSZE1FozMyIyszFGRD5ijCEistYaY7z3vXcAGGM" +
  "g4jzPIQQyxoQQSim9dyK673uMwczOud/vR9ZaEVmWBQBSSrVWpRQi/mvn3HcjIu99KUUppb" +
  "W21nrv/wCUZJfLhO8xFQAAAABJRU5ErkJggg==";

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
