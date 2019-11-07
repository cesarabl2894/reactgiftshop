import React, {Component} from 'react';
import urlservices from '../services/urlservices';
import swal from 'sweetalert';


class AddGame extends Component{
    constructor(props){
        super(props);
        this.state= {
            id: '',
            name: '',
            developer: '',
            publisher: '',
            price: '',
            image: '',
            description: ''
        };        
    }
    componentDidMount(){
        this.loadinfo();        
    }
    async loadinfo(){
        
        if(this.props.action === 'edit')
        try {
            const id = this.props.id;
            const response = await urlservices.getService(`/games/${id}/`, 'GET');
            console.log(response);
            const { name, developer, publisher, price, image, description } = response.data[0];

            this.setState({ id, name, developer, publisher, price, image, description });
        } catch (err ) {
            console.error(err);
        }
    }
    async gameAction(e){
        e.preventDefault();
        // const action = window.location.href.split("/").pop();
        const action = this.props.action;
        const { name, developer, publisher, price, image, description } = this.state;
        const request = { name, developer, publisher, price, image, description };        
        try {
            if(action === 'add'){
                const result =  await urlservices.getService('/games/','POST', request);
                swal("Successful", result.data.responseMessage, "success");
                this.props.onCloseModal();
                this.props.fetchGames();
            }
            else{
                request.id = this.state.id;
                const result =  await urlservices.getService('/games/','PUT', request);
                swal("Successful", result.data.responseMessage, "success");
                this.props.onCloseModal();
                this.props.fetchGames();
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    async deleteGame(){
        const id = this.props.id;
        try{
            const result = await urlservices.getService(`/games/${id}`,'DELETE');
            swal("Successful", result.data.responseMessage, "success");
            this.props.onCloseModal();
            this.props.fetchGames();
            // window.location.reload();
        }catch(error){
            swal("Error","Something Went Wrong With your request", "error");
            console.log(error.message);
        }
    }
    render(){
        return(
            <div id="edit-popup">
                <section>
                    <div className="thumbnailUpload"><img src={this.state.image} alt={this.state.name}/></div>
                    <div className="addInfo">
                        <form className="addGame" onSubmit={(e)=> this.gameAction(e)}>
                            <input className="name" type="text" name="name" value={this.state.name} required placeholder="enter game name" onChange={(e)=>this.setState({name:e.target.value})}/>
                            <input className="description" type="text" name="description" value={this.state.description} required placeholder="enter game description" onChange={(e)=>this.setState({description:e.target.value})} />
                            <input className="image" type="text" name="image" required value={this.state.image} placeholder="upload game image" onChange={(e)=>this.setState({image:e.target.value})}/>
                            <input className="price" type="text" name="price" required value={this.state.price} placeholder="enter game price" onChange={(e)=>this.setState({price:e.target.value})}/>
                            <input className="publisher" type="text" name="publisher" value={this.state.publisher} required placeholder="enter game publisher" onChange={(e)=>this.setState({publisher:e.target.value})}/>
                            <input className="developer" type="text" name="developer" value={this.state.developer} required placeholder="enter game developer" onChange={(e)=>this.setState({developer:e.target.value})}/>
                            <div className="gameOptions">
                                <input type="submit" className="save" value="Submit" />
                                <a className="cancel" onClick={() =>this.deleteGame()}>Delete</a>
                            </div>
                        </form>
                        
                    </div>
                </section>
            </div>
        )    
    }
    
}
export default AddGame;