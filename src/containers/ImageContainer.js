import { connect } from "react-redux";
import ImagePane from "../components/ImagePane";

const mapStateToProps = (state, ownProps) => {
  return {
    dummy: state.dummy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDummy: () => {
      console.log("You could call dispatch(dummyAction())");
    }
  };
};

const ImageContainer = connect(mapStateToProps, mapDispatchToProps)(ImagePane);

export default ImageContainer;
