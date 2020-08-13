import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css'

interface iSuccess {
    title: string;
    description?: string;
    buttonText: string;
    route?: string;
}

const Success:React.FC<iSuccess> = ({ title, description, buttonText, route, ...props }) => {
    return (
        <div 
            className="success-component">
            <div className="success-message">
                <img src={successIcon} alt="Success"/>
                <h1>{title}</h1>
                {
                    description?.split("\n").map((phrase, key) =>{
                    return <h2 key={key}> { phrase } </h2>
                    })
                }
            </div>

            <div className="link-div">
                <Link to={route ? `${route}` : '/'} className="link">
                    <button> { buttonText } </button>
                </Link>
            </div>
        </div>
    );
}

export default Success
