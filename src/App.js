import React, { Component } from 'react';
import FilmList from "./components/film-list/Film-list";
import FilmsDetails from "./components/films-details/FilmsDetails";
import {connect} from 'react-redux'

class App extends Component {

    constructor(){
        super();
        this.state = {
            filmsName : null,
        }
    }

    render(){
        return(
            <div>
                <FilmList filmsName={this.props.names} />
                <FilmsDetails selectedFilm={this.props.selectedFilm} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedFilm : state.selectedFilm,
        names: state.names
    }
}
export default connect(mapStateToProps)(App)