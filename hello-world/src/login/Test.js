import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Test extends Component {
    render () {
        return (
            <div style={{alignItems: 'center'}}>
                <NavLink to="/login" activeStyle={{fontWeight: "bold",color: "red"}}>Login</NavLink>
                <NavLink to="/signup" activeStyle={{fontWeight: "bold",color: "red"}}>SingUP</NavLink>
            </div>
        )
    }
}

export default Test