/**
 * Created by Ilya Radu on 14/05/2017.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SET_NAME} from '../../Store/constant'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import '../film-list/FilmList.scss'
class FilmList extends Component {
    constructor() {
        super();
        this.state = {
            filmsName: [],
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
        }

    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };

    render() {
        const SortableItem = SortableElement(({value}) =>
            <li>{value}</li>
        );
        const SortableList = SortableContainer(({items}) =>
            <ul>
                {items.map((value, index) => (
                    <SortableItem key={`item-${index}`} index={index} value={value}/>
                ))}
            </ul>
        );
        console.log(SortableList);


        const {dispatch} = this.props;
        return (
            <div>
                <h1>Film-list</h1>
                <ul className="mylistA parent">
                    {this.props.filmsName.map((name, key) =>
                        <li onClick={() => {
                            dispatch({type: SET_NAME, payload: name})
                        }   }
                            className="mylistB child" key={key}>
                            {name}
                        </li>)}
                    <li className="mylistC child">Hello</li>
                </ul>
                <SortableList items={this.props.filmsName} onSortEnd={this.onSortEnd}/>
            </div>
        )
    }
}


export default connect()(FilmList)