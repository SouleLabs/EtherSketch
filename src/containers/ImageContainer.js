import { connect } from "react-redux";
import _ from "lodash";
import ImagePane from "../components/ImagePane";
import loadWallImage from "../util/loadWallImage";

const mapStateToProps = (state, ownProps) => {
  return {
    status: _.get(state, "wall.blocks.status"),
    data: _.get(state, "wall.blocks.data")
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
