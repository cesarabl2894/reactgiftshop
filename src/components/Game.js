import React , { Component } from 'react';
import urlservices from '../services/urlservices';

class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            game : {}
        }
    }
    async componentDidMount(){
        const gameName = this.props.match.params.name;
        try{
            const ajxresponse = await urlservices.getService(`/game/${gameName}`,'GET');
            const game = ajxresponse.data.data;
            this.setState({game});
        }catch(err){

        }
        
    }
    render(){
        const game = this.state.game;
        return(
            <div>
                <h2>{game.name}</h2>
                <img className="img-thumbnail" src={game.image} alt={game.name}/>
                <p>${game.price}</p>
            </div>
        )
    }
}
export default Game;