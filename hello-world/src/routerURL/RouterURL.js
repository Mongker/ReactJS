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
import SignUp from '../login/SignUp';
import MenuApp from '../components/MenuApp';
// import ListFood from '../components/listFood';
import MultipleChoice from '../components/multiple_choice/MultipleChoice';
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
                    {/* <Route path="/ListFood" component={ListFood}/> */}
                    {/* <Route component={Login}/> */}
                </Switch>
        )
    }
}

export default RouterURL;