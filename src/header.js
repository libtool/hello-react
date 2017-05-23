import React, {Component, PropTypes} from 'react';


class Header extends Component {
    static propTypes = {
      item: PropTypes.array.isRequired
    }
    render() {

        return (
            <div>
                {this.props.item.map((item, index) =>
                        <a href={item.link} key={index}> {item.label} </a>



                    )}
            </div>
        )
    }

}

export default Header;
