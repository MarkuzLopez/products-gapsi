import React from 'react'
import './CarShop.scss';

import logoCar from '../../../assets/img/car-shop2.png';

const CarShop = (props) => {
    return (
        <div className='CarShop'>
            <div className='circulo' >
                <div className='number-car'>
                    <h3>{props.total}</h3>
                </div>
            </div>
            <div className='border-car'>
                <img src={logoCar} className='rounded mx-auto d-block img-car' alt="..." />
            </div>
             <p>Arrastre aqui los productos</p>
        </div>
    );
}

export default CarShop;