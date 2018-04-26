import React, {Component} from 'react';
import urlservices from '../services/urlservices';

class Games extends Component{
    constructor(props){
        super(props);
        this.state ={
            games: []
        }
    }
    async fetchGames(){
        try {
            // const token = localStorage.getItem('token');
            const ajxresponse = await urlservices.getService('/games?name=','GET');
            const games = ajxresponse.data.data;
            this.setState({games})
            
        } catch (error) {
            console.log(error);
        }
    }
    componentDidMount(){
        this.fetchGames();

    }
    render(){
        const games = this.state.games;
        return(
            <div className="homepageWrapper">
                <section className="searchContainer">
                    <form className="searchForm" >
                            <input className="searchField" type="text" name="FirstName" placeholder="LOOK FOR YOUR FAVORITE GAMES"/>
                    </form>
                </section>
                <main className="productMain">
                    <ul className="productList">
                    {games.map(game =>
                        <li className="game" key={game.id}>
                            <a href={`/game/${game.name}`} >
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
                        </li>
                    )}
                    </ul>
                    <div class="addGameContainer"><a class="addGame open-popup-link" href="#add-popup"><img src="build/img/add-button.png" alt="plus-sign"/></a></div>
                </main>       
            </div>
        )
    }
}
export default Games;