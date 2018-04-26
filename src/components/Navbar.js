import React, {Component} from 'react';
import loginIcon from '../assets/img/user-profile.png';
import shoppingIcon from '../assets/img/shopping-cart.png';

class Navbar extends Component{
    render(){
        return(
            <header id="header">
                <nav>
                <a className="userProfile" href=""><img src={loginIcon} alt="user-profile"/></a>
                <a className="toHome" href="../">GAMELAND</a>
                <a className="shoppingCart" href=""><img src={shoppingIcon} alt="shopping-cart"/></a>
                </nav>
            </header>
        )
    }
}
export default Navbar;