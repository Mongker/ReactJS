/**
 * Copyright 2020-present, Mong Lê Văn , Cop.
 * All rights reserved.
 *
 * @author Mong Lê Văn  on 4/10/2020.
 */
import React from 'react';
import { Alert, message } from 'antd';
import md5 from 'md5';

// style 
// import './styles/index.css'

// firebasefirebase
import database from '../firebase/firebase';


class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pass: '',
            check: '',
            userTmp: '#',
            passTmp: '#',
            checkTmp: '#',
        };
    }

    onChangeUser = (event) => {
        const textUser = event.target.value;
        this.setState({userTmp: "#"});
        this.setState({ user: textUser});
    };

    onChangePass = (event) => {
        const textPass = event.target.value;
        this.setState({passTmp: "#"});
        this.setState({ pass: textPass});
    };

    onChangeCheckPass = (event) => {
      const textCheckPass = event.target.value;
      this.setState({ checkTmpT: "#"});
      this.setState({ check: textCheckPass});
    };
    
    onSignUp = () => {
        const {user, pass, check} = this.state;
        this.setState({
          userTmp: user,
          passTmp: pass,
          checkTmpT: check,
        });
        (pass === check) && (
          database.auth()
          .createUserWithEmailAndPassword(user, md5(pass))
          .then(this.onLogInHome)
          .catch((error) => message.info('Thất bại lỗi :'+error))
        ) 
        
    };

    onLogInHome = () => {
      const { history} = this.props;
      history.push("/");
    };

    onResetText = () => {
      this.setState({
        user: '',
        pass: '',
        check: '',
        userTmp: "#",
        passTmp: "#",
        checkTmpT: "#",
      })
    };

    render(){
        const {user, pass, check, userTmp, passTmp, checkTmp} = this.state;
        return (
          <div className="container">
          <div class="flex col-2 row" id="form">
          <div class="left col">
            <div class="col-spacer">
              <div class="form-header"><i class="fas fa-lock icon txtglow"></i><span>SIGN UP</span></div>
            </div>
            <div class="input-wrap">
              <div class="input-icon">
                <div class="icon"><i class="fas fa-user"></i></div>
                <input type="text" placeholder="Email" value={user} onChange={this.onChangeUser} />
              </div>
              { (userTmp !== "#" || user === userTmp) && (
                (userTmp.includes('@') && user.includes('.')) 
                ?
                (<Alert message="Gmail Đã Được Xác Nhận" type="success" showIcon style={{background: "rgba(250,250,250,0.15)"}} />)
                :
                (<Alert message="Không Phải Là Gmail" type="warning" showIcon style={{background: "rgba(250,250,250,0.15)"}} />)
              )
              }
            </div>
            <div class="input-wrap"> 
              <div class="input-icon">
                <div class="icon"><i class="fas fa-key"></i></div>
                <input type="password" placeholder="Password" value={pass} onChange={this.onChangePass}/>
              </div>
              { (passTmp !== "#" || pass === passTmp) && (
                  (passTmp.length > 7)
                  ?
                  (<Alert message="Pass đạt chuẩn (Pass của bạn đã được mã hóa)" type="success" showIcon style={{background: "rgba(250,250,250,0.15)"}} />)
                  :
                  (<Alert message="Pass phải có 8 ký tự " type="warning" showIcon style={{background: "rgba(250,250,250,0.15)"}} />) 
              )
              }
            </div>
            <div class="input-wrap"> 
              <div class="input-icon">
                <div class="icon"><i class="fas fa-key"></i></div>
                <input type="password" placeholder="Check Password" value={check} onChange={this.onChangeCheckPass}/>
              </div>
              {
                  (pass !== check || checkTmp !== "#" ) &&
                  (<Alert message="Pass không khớp nhau" type="warning" showIcon style={{background: "rgba(250,250,250,0.15)"}} />)
              }
            </div>
            
            <div class="flex space mt-center">
              <button class="button login big" onClick={this.onLogInHome} >LOGIN-NOW</button>
              <button class="button signup big" onClick={this.onSignUp} >SAVE-NOW</button>
              <button class="button primary big" onClick={this.onResetText}>RESET-NOW</button>
            </div>
          </div>
        </div>
        </div>
        );
    }
}
export default SignUp;