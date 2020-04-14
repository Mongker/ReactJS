// Library
import React, {Component} from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Title from '../title/Title';
import InputValueContainer from '../inputValue/InputValueContainer';
import ToDoListContainer from '../displayTodo/ToDoListContainer';
import OptionContainer from '../options/OptionContainer';
import {changeAllCompleted} from '../base/changeAllCompleted';

// Styles
import '../css/index.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActiveAll: false,
        }
    }

    componentDidMount() {
        this.props.update();
    }


    onChangeAll = (todoList) => {
        const {completedAllTodo} = this.props;
        this.setState((prevState) => ({
            isActiveAll: !prevState.isActiveAll,
        }))
        completedAllTodo(changeAllCompleted(todoList));
    }

    render() {
        const {isActiveAll} = this.state;
        const {getActive, getCompleted, getAll, update} = this.props;
        return (
            <Router>
                <Row>
                    <Col sm={{span: 10, offset: 4}} xs={{span: 24}} md={{span: 16, offset: 4}}>
                        <Title/>
                        <div className={'content-todo'}>
                            <InputValueContainer onChangeAll={this.onChangeAll} update={update}/>
                            <Switch>
                                <Route path={'/'} render={(match) => <ToDoListContainer isActiveAll={isActiveAll} match={match} />} />
                                <Route path={'/active'} render={(match) => <ToDoListContainer isActiveAll={isActiveAll} match={match} />} />
                                <Route path={'/completed'} render={(match) => <ToDoListContainer isActiveAll={isActiveAll} match={match} />} />
                            </Switch>
                            <OptionContainer getCompleted={getCompleted} getActive={getActive} getAll={getAll}/>
                        </div>
                    </Col>
                </Row>
            </Router>

        );
    }
}

Home.propsType = {
    //Actions
    getCompleted: PropTypes.func,
    getActive: PropTypes.func,
    getAll: PropTypes.func,
    update: PropTypes.func,
    completedAllTodo: PropTypes.func,
};

Home.defaultProps = {
    update: () => {},
    completedAllTodo: () => {},
    getActive: () => {},
    getCompleted: () => {},
    getAll: () => {},
}

export default Home;
