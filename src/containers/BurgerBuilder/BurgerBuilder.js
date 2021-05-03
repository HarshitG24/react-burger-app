import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

// Aux fulfills the requirement of wrapping element.
class BurgerBuilder extends Component{
    render(){
        return(
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;