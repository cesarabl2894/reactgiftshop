import React , { Component } from 'react';
import Switcher from './Switcher.js';
import Navbar from './Navbar.js';


class Main extends Component {
    // constructor(props){
    //     super(props);
    // }
    
    render(){
        return(
            <div>
                <Navbar/>
                <Switcher/>
            </div>   
        )
    }
}
export default Main;