import store from "../store";
import _ from "lodash";

export const WALL_IMAGE_LOAD = "WALL_IMAGE_LOAD";
export const sampleImageUrl = "http://localhost:3000//image-map.png";

function wallImageLoad(status, data) {
  return {
    type: WALL_IMAGE_LOAD,
    payload: { status, data }
  };
}

function encode64(inputStr) {
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var outputStr = "";
  var i = 0;

  while (i < inputStr.length) {
    //all three "& 0xff" added below are there to fix a known bug
    //with bytes returned by xhr.responseText
    var byte1 = inputStr.charCodeAt(i++) & 0xff;
    var byte2 = inputStr.charCodeAt(i++) & 0xff;
    var byte3 = inputStr.charCodeAt(i++) & 0xff;

    var enc1 = byte1 >> 2;
    var enc2 = ((byte1 & 3) << 4) | (byte2 >> 4);

    var enc3, enc4;
    if (isNaN(byte2)) {
      enc3 = enc4 = 64;
    } else {
      enc3 = ((byte2 & 15) << 2) | (byte3 >> 6);
      if (isNaN(byte3)) {
        enc4 = 64;
      } else {
        enc4 = byte3 & 63;
      }
    }

    outputStr +=
      b64.charAt(enc1) + b64.charAt(enc2) + b64.charAt(enc3) + b64.charAt(enc4);
  }

  return outputStr;
}

function loadWallImage() {
  var request = new XMLHttpRequest();
  store.dispatch(wallImageLoad("pending"));
  request.onload = e => {
    const encoded = encode64(request.responseText);
    var dataUrl = `data:image/png;base64,${encoded}`;
    store.dispatch(wallImageLoad("success", dataUrl));
  };
  request.onabort = request.onerror = e => {
    store.dispatch(wallImageLoad("fail"));
  };
  request.open("GET", sampleImageUrl);
  request.overrideMimeType("text/plain; charset=x-user-defined");
  request.send();
}

export default loadWallImage;
