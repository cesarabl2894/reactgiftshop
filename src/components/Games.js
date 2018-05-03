import React, {Component} from 'react';
import urlservices from '../services/urlservices';
import Modal from "react-responsive-modal";
import AddGame from './AddGame.js';
import addButton from '../assets/img/add-button.png';


class Games extends Component{
    constructor(props){
        super(props);
        this.state ={
            games: [],
            open: false,
            action: '',
            id: '',
            gameName:''
        }
        // this.fetchGames = this.fetchGames.bind(this);
    }
    onOpenModal = (action,id,name) => {
        this.setState({ open: true, action: action, id:id,gameName: name});
    };

    onCloseModal = () => {
       this.setState({ open: false });
    };
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
        const { open } = this.state;
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
                            <a onClick={(action,id,name) => this.onOpenModal('edit',game.id,game.name)} >
                                <figure >
                                    <img src={game.image} alt={game.name} />
                                    <figcaption>
                                        <ul>
                                            <li><strong>Title: </strong> {game.name}</li>
                                            <li><strong>Developer: </strong>{game.developer}</li>                                            
                                            <li><strong>Publisher: </strong> {game.publisher}</li>
                                            <li><strong>Price: </strong>${game.price}</li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                    )}
                   
                    </ul>
                    <div className="addGameContainer"><a className="addGame open-popup-link" onClick={(action) => this.onOpenModal('add')}><img src={addButton} alt="plus-sign"/></a></div>
                    <Modal open={open} onClose={this.onCloseModal} center>
                        <AddGame action ={this.state.action} id={this.state.id} name={this.state.gameName} fetchGames={() => this.fetchGames()} onCloseModal={()=> this.onCloseModal()}/>
                    </Modal> 
                </main>       
            </div>
        )
    }
}
export default Games;