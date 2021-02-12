import React, { Component } from 'react';
import thumbnail_logo from '../../assets/img/thumbnail_logo.png';
import { Link } from 'react-router-dom';

import './Home.scss';

import { newVisitor} from '../../services/productsService'

class Home extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="Home mt-5 animate__animated animate__fadeIn">
                <div>
                    <div className="img-home">
                        <img src={thumbnail_logo} className="rounded mx-auto d-block" alt="..." />
                    </div>
                    <div className="card-body" >
                        <h1 className="text-center space-paragraph">Bienvenido Candidato 01</h1>
                        <div className="text-center space-paragraph">
                            <Link className="btn btn-primary btn-lg" to={'/articulos'}>Continuar</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;