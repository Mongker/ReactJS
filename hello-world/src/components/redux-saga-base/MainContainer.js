// Redux
import { connect } from "react-redux";

//Acion
import { actionDown, actionUp } from "../../action/index";

// components
import Main from "./Main";

const mapStateToProps = state => {
  return {
    times: state.MainReducers ? state.MainReducers : 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUp: step => dispatch(actionUp(step)),
    onDown: step => dispatch(actionDown(step))
  };
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;
