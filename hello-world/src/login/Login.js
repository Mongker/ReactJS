import React, { Component } from 'react'
import { message } from 'antd';

// firebase
import database from '../firebase/firebase';

// style 
import './styles/index.css'

// block md5 
import md5 from 'md5';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pass: '',
        };
    }

    onChangeUser = (event) => {
        const textUser = event.target.value;
        this.setState({ user: textUser});
    };

    onChangePass = (event) => {
        const textPass = event.target.value;
        this.setState({ pass: textPass});
    };
    
    onLogin = () => {
        const {user, pass} = this.state;
        database.auth(this.checkLogin())
        .signInWithEmailAndPassword(user, md5(pass))
        .then()
        .catch((error) => message.info('Thất bại lỗi :'+error.toString().replace("Error: The email address is badly formatted.", "Đây không phải là một gmail")))
    };

    onSigUp = () => {
      const { history} = this.props;
      debugger;
      history.push("/signup");
      debugger;
    };

    checkLogin = () => {
      const {user, pass} = this.state;
      const { history } = this.props;
      // MongLV by fix tạm test trắc nghiệm 
      history.push('/multiple-choice');
      if (typeof(Storage) !== 'undefined') {
        //Nếu có localStorage hỗ trợ
        localStorage.setItem('userMong', user);
        localStorage.setItem('passMong', md5(pass));
    } else {
        //Nếu không localStorage hỗ trợ
        message.info("Trình duyệt của bạn không hỗ trợ trang web");
    }
    }
    
    onUpdate = () => message.info('Chức năng đang phát triển');

    render () {
        return (
            <div class="flex col-2 row" id="form">
            <div class="left col">
              <div class="col-spacer">
                <div class="form-header"><i class="fas fa-lock icon txtglow"></i><span>Login Form</span></div>
              </div>
              <div class="input-wrap">
                <div class="input-icon">
                  <div class="icon"><i class="fas fa-user"></i></div>
                  <input type="text" placeholder="Username or Email" onChange={this.onChangeUser} />
                </div><a class="input-desc" href="#">Forgot your username?</a>
              </div>
              <div class="input-wrap"> 
                <div class="input-icon">
                  <div class="icon"><i class="fas fa-key"></i></div>
                  <input type="password" placeholder="Password" onChange={this.onChangePass}/>
                </div><a class="input-desc" href="#">Forgot your password?</a>
              </div>
              <div class="cb-wrap">
                  <input class="glow" id="remember" type="checkbox" name="rembember"/>
                  <label for="remember">Remember me</label>
              </div>
              <div class="flex space mt-center">
                <button class="primary big" onClick={this.onLogin}>SIGN-IN NOW</button>
                <button class="signup big" onClick={this.onSigUp} >SIGN-UP NOW</button>
              </div>
            </div>
            {/* <div class="right col flex column">
              <div class="col-spacer"></div>
              <button class="twitter social" onClick={this.onUpdate}><i class="fab fa-twitter fa-fw"></i>Sign in with Twitter</button>
              <button class="facebook social" onClick={this.onUpdate}><i class="fab fa-facebook-f fa-fw"></i>Sign in with Facebook</button>
              <button class="googleplus social"onClick={this.onUpdate}><i class="fab fa-google-plus-g fa-fw"></i>Sign in with Google+</button>
              <button class="linkedin social"  onClick={this.onUpdate}><i class="fab fa-linkedin-in fa-fw"></i>Sign in with Linkedin</button>
            </div> */}
          </div>
        )
    }
}

export default Login;