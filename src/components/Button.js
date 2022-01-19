import React, { Component } from 'react';
import './Button.css'
import Modal from './Modal';

class Button extends Component {

    state = {
        visible: false
    }

    showPopup = () => {
        this.setState({
            visible: true
        })
    }

    hidePopup = () => {
        this.setState({
            visible: false
        })
    }

    render() {

        return (
            <div className='container__modal'>
                <button onClick={this.showPopup} className='popupButton'>Click me</button>
                <Modal
                    visible={this.state.visible}
                    hide={this.hidePopup}
                />
            </div>
        );
    }
}

export default Button;