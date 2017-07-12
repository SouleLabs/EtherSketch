import { connect } from "react-redux";
import _ from "lodash";
import ImagePane from "../components/ImagePane";
import loadWallImage from "../util/loadWallImage";

const mapStateToProps = (state, ownProps) => {
  return {
    status: _.get(state, "wall.pixels.status"),
    data: _.get(state, "wall.pixels.data"),
    width: _.get(state, "wall.pixels.width"),
    height: _.get(state, "wall.pixels.height")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      loadWallImage();
    }
  };
};

const ImageContainer = connect(mapStateToProps, mapDispatchToProps)(ImagePane);

export default ImageContainer;
