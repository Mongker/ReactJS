import { connect } from "react-redux";

// action
import { actionThanhCong } from "../actions/index";
// actionShowList, actionError

//  components
import App from "./App";

const mapStateToProps = state => {
  const dataObj = state.danhSachReducers;
  return { dataObj };
};

function mapDispatchToProps(dispatch) {
  return {
    getList: () => dispatch(actionThanhCong())
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
