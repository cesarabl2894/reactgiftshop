import React, {Component} from 'react';
import urlservices from '../services/urlservices';

class AddGame extends Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        console.log(this.props.match.params);
    }
    gameAction(e){
        const gameName = this.props.match.params.name;
        e.preventDefault();
        const action = window.location.href.split("/").pop();
        console.log(gameName);
        if(action === 'add'){
            try {
                
            } catch (error) {
                console.log(error);
            }
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={(e)=> this.gameAction(e)}>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <button>+</button>
                </form>
            </div>
        )    
    }
    
}
export default AddGame;