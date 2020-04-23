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
import MultipleChoice from '../components/multiple_choice/MultipleChoice';
// import Tes from '../login/';

class RouterURL extends Component {
    render () {
        return (
            // TODO by MongLV
                <Switch>
                    {/* <Route path="/" component={Login} /> */}
                    <Route path="/signup" component={SignUp} />
                    <Route path="/menu" component={MenuApp}/>
                    <Route exact path="/multiple-choice" component={MultipleChoice}/>
                    <Route exact path="/" component={MultipleChoice}/>
                    <Route component={MultipleChoice}/>
                </Switch>
        )
    }
}

export default RouterURL;