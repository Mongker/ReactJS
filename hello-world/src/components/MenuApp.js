/**
 * Copyright 2020-present,Mong Lê Văn , 
 * Cop.All rights reserved.
 * @author Mong Lê Văn  on 4/14/2020.
 * */
import React from 'react'

// firebase
import database from '../firebase/firebase';

class MenuApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
             check: false
        };
    }
    checkAccount = () => {
        const { history } = this.props;
        const user = localStorage.getItem('user');
        const pass = localStorage.getItem('pass');
        debugger;
        database.auth()
        .signInWithEmailAndPassword(user, pass)
        .then(this.abc())
        .catch((e) => history.push(e));
    };

    abc = () => {
        return this.setState({check: true});
    }

    render () {
        const {check} = this.state;
        debugger;
            return (
               <div>
                    <h1>{check.toString()}</h1>
                    {this.checkAccount}
                    <h1>Chán vcl</h1>
               </div>
            );
    }
}

export default MenuApp;