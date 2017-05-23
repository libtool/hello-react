import React, {Component} from 'react';

import Header from './header';

const menu = [
    {
        link: '/articles',
        label: 'Arcticles'
    },
    {
        link: '/articles1',
        label: 'Arcticles1'
    },
    {
        link: '/articles2',
        label: 'Arcticles2'
    }
]

class App extends Component {

    render() {
        return (
            <div>
                <Header item = {menu}/>
            </div>
        )
    }

}


export default App;