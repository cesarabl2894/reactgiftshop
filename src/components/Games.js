import React, {Component} from 'react';
import urlservices from '../services/urlservices';

class Games extends Component{
    constructor(props){
        super(props);
        this.state ={
            games: []
        }
    }
    async componentDidMount(){
        try {
            // const token = localStorage.getItem('token');
            const ajxresponse = await urlservices.getService('/games?name=','GET');
            const games = ajxresponse.data.data;
            this.setState({games})
            
        } catch (error) {
            console.log(error);
        }

    }
    render(){
        const games = this.state.games;
        return(
            <div>
                <h1>Choose from our Game List</h1>
                {games.map(game =>
                    <div key={game.id}>
                        <h2>{game.name}</h2>
                        <img src={game.image} alt=""/>
                    </div>

                )}           
            </div>
        )
    }
}
export default Games;