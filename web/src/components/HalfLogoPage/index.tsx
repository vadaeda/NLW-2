import React from 'react';

import logoImg from '../../assets/images/logo.svg'

import './styles.css';


const HalfPageLogo:React.FC = (props) => {
    return(
        <div className="page-half-logo">
            <div className="platform-content">
                <div className="logo-container">
                        <img src={logoImg} alt=""/>
                        <h2>Sua plataforma de <br/>estudos online.</h2>
                </div>
            </div>
            <div className="half-page-content">
                {props.children}
            </div>
        </div>
    );
}

export default HalfPageLogo;