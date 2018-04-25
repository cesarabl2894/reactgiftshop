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

    const result = await urlservices.getService('/login','POST', body);

    console.log(result.data.data);

    const { token } = result.data.data;

    localStorage.setItem('token',token)
    // console.log(result)

    try {
      
    } catch (error) {
      console.log(error);
    }
    console.log(this.state);
  }
  getEmail(e){
    const email = e.target.value; 
    this.setState({email});
  }
  getPassowrd(e){
    let password = e.target.value;
    this.setState({password:password});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Enter Your Credentials</h1>
        </header>
        <form onSubmit={e => this.loginAction(e)}>
          <input type="text" placeholder="cesar_abl94@hotmail.com" onChange={e => this.getEmail(e)} />
          <input type="password" placeholder="Password" onChange={e => this.getPassowrd(e)}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;