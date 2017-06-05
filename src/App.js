import React, {Component} from 'react';
import RegistrationForm from './RegistrationForm';
import Header from './header';
import Dropdowm from './Dropdown';
import Menu from './Menu';



class App extends Component {

    render() {
        return (

            <div>
              <Menu />
              <RegistrationForm />
            </div>
        )
    }

}


export default App;
