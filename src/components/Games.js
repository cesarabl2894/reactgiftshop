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
        const gameUrl = '/game/';
        return(
            <div className="homepageWrapper">
                <section className="searchContainer">
                    <form className="searchForm" >
                            <input className="searchField" type="text" name="FirstName" placeholder="LOOK FOR YOUR FAVORITE GAMES"/>
                    </form>
                </section>
                <main className="productMain">
                    <div className="productList">
                    {games.map(game =>
                        <a href={`/game/${game.name}`} key={game.id}>
                            <figure >
                                <img src={game.image} />
                                <figcaption>
                                    <ul>
                                        <li><strong>Title:</strong> {game.name}</li>
                                        <li><strong>Developer:</strong>{game.developer}</li>
                                        
                                        <li><strong>Publisher:</strong> {game.publisher}</li>
                                        <li><strong>Price:</strong>${game.price}</li>
                                    </ul>
                                </figcaption>
                            </figure>
                        </a>
                        
                    )}
                    
                    </div>
                </main>       
            </div>
        )
    }
}
export default Games;