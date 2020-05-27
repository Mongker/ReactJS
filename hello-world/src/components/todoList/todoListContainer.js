// Redux
import { connect } from "react-redux";
// Action

// Components
import todoList from './todoList';

const mapStateToProps = state => {
    return {};
};

const mapDispatchProps = dispatch => {
    return {}
};

const todoListContainer = connect(mapStateToProps, mapDispatchProps)(todoList);

export default todoListContainer;