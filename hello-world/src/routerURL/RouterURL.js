/**
 * Copyright 2020-present, Mong Lê Văn , Cop.
 * All rights reserved.
 *
 * @author Mong Lê Văn  on 4/10/2020.
 */

import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';

// component 
import Login from '../login/Login';
import LoginAdmin from '../components/account/LoginAdmin';
import SignUp from '../login/SignUp';
import MenuApp from '../components/MenuApp';
import LoginChat from '../components/messageChat/LoginChat';
import chatRoom from '../components/messageChat/chatRoom';
// import ListFood from '../components/listFood';
import MultipleChoice from '../components/multiple_choice/MultipleChoice';
import MainContainer from '../components/redux-saga-base/MainContainer';
import todoListContainer from '../components/todoList/todoListContainer';
// import Tes from '../login/';

class RouterURL extends Component {
    render () {
        return (
            // TODO by MongLV
                <Switch>
                {/* Thêm exact vào component dev  */}
                    <Route path="/login" component={Login} />
                    <Route path="/multiple-choice" component={MultipleChoice}/>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/menu" component={MenuApp}/>
                    <Route path="/login-admin" component={LoginAdmin} />
                    <Route path="/message" component={LoginChat} />
                    <Route path="/chatRoom" component={chatRoom} />
                    <Route path="/redux-saga-base" component={MainContainer} />
                    <Route path="/bug" component={todoListContainer} />
                    <Route component={Login}/>
                </Switch>
        )
    }
}

export default RouterURL;