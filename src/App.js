import React from 'react';
import FilmList from "./components/film-list/Film-list";
import FilmsDetails from "./components/films-details/FilmsDetails";
import {connect} from 'react-redux'

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            filmsName : "Hello",
        }
    }

    titleMe(event){
        console.log(event);
        const title= event.target.value;
        this.setState({filmsName:title})
    }
    render(){
        return(
            <div>
                <FilmList filmsName={this.props.names} />
                <FilmsDetails selectedFilm={this.props.selectedFilm} />
                <h1>Hello {this.state.filmsName}</h1>
                <input type="text" onChange={this.titleMe.bind(this)}/>
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