import React, { Component } from 'react';
import urlservices from '../services/urlservices';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }
  async loginAction(e){
    e.preventDefault();
    const {email, password} = this.state;
    const body = {email, password};
    // const Errmessage = result.data.message    
    // console.log(result)

    try {
      const result = await urlservices.getService('/login','POST', body);
      const { token } = result.data.data;   
    localStorage.setItem('token',token)
    } catch (error) {
      alert('Invalid Credentials');
    }
  }
  getEmail(e){
    const email = e.target.value; 
    this.setState({email});
  }
  getPassowrd(e){
    let password = e.target.value;
    console.log(password);
    this.setState({password:password});
  }
  render() {
    return (
        <div className="loginWrapper">
            <main className="loginContainer">
                <div className="loginBox">
                    <div className="loginOptions">
                        <a href="" className="signIn">Sign Up</a>
                        <a href="" className="signUp">Sign Up</a>
                    </div>
                    <div className="loginInfo">
                        <h1 className="logo">GAMELAND</h1>
                        <p className="slogan">(Gaming...for everyone)</p>
                        <form className="loginForm" onSubmit={(e)=>this.loginAction(e)}>
                            <input className="user" type="email" placeholder="enter email or username" onChange={e => this.getEmail(e)}/>
                            <input className="password" type="text" placeholder="enter your password" onChange={e => this.getPassowrd(e)}/>
                            <input className="submit" type="submit" value="Log In"/>
					              </form>
                    </div>
                    
                </div>
            </main>
        </div>
    );
  }
}

export default Login;