import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logoGapsiHeader from '../../assets/img/logohead.png';

const Header = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light row space-between header">
                <Link className="navbar-brand" to={"/"} >
                    <img src={logoGapsiHeader} width="250" height="60" className="d-inline-block align-top" alt="" />
                </Link>
                <div className='cursor'>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </nav>
    );
}

export default Header;