import React, { Component } from 'react';
import FilmList from "./components/film-list/Film-list";
import FilmsDetails from "./components/films-details/FilmsDetails";

class App extends Component {

    constructor(){
        super();
        this.state = {
            names : ['Titanic', 'Fast Furious','X-men']
        }

    }
    render(){
        return(
            <div>
                <FilmList names={this.state.names} />
                <FilmsDetails />
            </div>
        )
    }
}
export default App