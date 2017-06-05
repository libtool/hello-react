/**
 * Created by istominya on 23.05.2017.
 */
import React, {Component} from 'react';

class Dropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {isOpened: false};

        this.toggleState = this.toggleState.bind(this)
    }

    toggleState(){
        this.setState({isOpened:!this.state.isOpened})
    }
    render() {
        console.log('isOpened', this.state.isOpened);
        let dropdownText;
        if (this.state.isOpened) {
            dropdownText = <div>Здесть показывается текст</div>
        }
        return (
            <div onClick={this.toggleState}>
                Its dropdown body1
                {dropdownText}
            </div>
        )
    }

}


export default Dropdown;
