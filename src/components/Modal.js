import React from 'react';
import './Modal.css'

const Modal = (props) => {

    console.log(props);

    return (
        <div className='modal' style={{
            transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.visible ? '1' : '0'
        }}>
            <div className='container__closeButton'>
                <button onClick={props.hide} className='closeButton'>X</button>
            </div>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse possimus alias temporibus repellat quis, est dignissimos numquam sunt hic minima voluptate! Repellat iusto, ipsum ad rem nemo eaque quia.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse possimus alias temporibus repellat quis, est dignissimos numquam sunt hic minima voluptate! Repellat iusto, ipsum ad rem nemo eaque quia.
            </p>
        </div>
    );
}

export default Modal;
