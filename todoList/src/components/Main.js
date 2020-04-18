// Library
import React, {Component} from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

// Components
import Home from './Home/Home';

// Styles
import './css/index.css';

class Main extends Component {
    render() {
        const {update, completedAllTodo} = this.props;
        debugger;
        return (
            <React.Fragment>
                <Home update={update} completedAllTodo={completedAllTodo} />
            </React.Fragment>
        );
    }
}

Main.propsType = {
    todoList: PropTypes.array,
    //Actions
    getCompleted: PropTypes.func,
    getActive: PropTypes.func,
    getAll: PropTypes.func,
    update: PropTypes.func,
    completedAllTodo: PropTypes.func,
};

export default Main;
