import React, {Component} from 'react';

class Navbar extends Component{
    render(){
        return(
            <header id="header" className="">
                <nav>
                <a className="userProfile" href=""><img src="src/img/user-profile.png" alt="user-profile"/></a>
                <a className="toHome" href="../">GAMELAND</a>
                <a className="shoppingCart" href=""><img src="src/img/shopping-cart.png" alt="shopping-cart"/></a>
                </nav>
            </header>
        )
    }
}
export default Navbar;