/**
 * Copyright 2020-present,Mong Lê Văn , 
 * Cop.All rights reserved.
 * @author Mong Lê Văn  on 4/14/2020.
 * */
import React from 'react'

// firebase
import database from '../firebase/firebase';

// styles
import "./styles/index.css";
import { Button } from 'antd';


class MenuApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false
        };
    };
    componentWillMount() {
        console.log("Run componentWillMount ")
        this.checkAccount();
    };

    checkAccount = () => {
        const user = localStorage.getItem('userMong');
        const pass = localStorage.getItem('passMong');
        debugger;
        let connect;
        try {
            const _connect = database.auth()
                .signInWithEmailAndPassword(user, pass)
                .then(this.render())
                .catch(() => this.loadingLogin());
            connect = _connect;
        } catch (error) {
            connect = this.loadingLogin();
        }
        return connect;

    };
    // MongLV by: Hàm này sẽ được sử dụng lại sau này
    // checkLogin = () => {
    //     const { check } = this.state;
    //     debugger;
    //     return this.setState({check: !check});
    // }

    loadingLogin = () => {
        const { history } = this.props;
        debugger;
        return history.push('/login');
    }

    render() {
        // const {check} = this.state;
        debugger;
        return (
            <React.Fragment>
                <div>
                    <header>
                    <button  style={{background: "rgba(250,250,250,0.15)", borderRadius: "100px"}}><img alt="Game" width="70" height="70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/1200px-Video-Game-Controller-Icon-IDV-green.svg.png"/></button>
                    </header>
                    <div>
                        <button  style={{background: "rgba(250,250,250,0.15)", borderRadius: "100px"}}><img alt="Game" width="70" height="70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/1200px-Video-Game-Controller-Icon-IDV-green.svg.png"/></button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MenuApp;