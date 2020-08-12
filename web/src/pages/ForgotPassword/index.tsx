import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import HalfPageLogo from '../../components/HalfLogoPage';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function ForgotPassword (){
    return(
        <HalfPageLogo>
            <div className="forgot-content">
                <div className="link">
                    <Link to="/authenticate" ><img src={backIcon} alt="Voltar"/></Link>
                </div>
                <form>
                    <fieldset>
                        <h1>Eita, esqueceu sua senha?</h1>
                        <h2>Não esquenta, vamos dar um jeito nisso. </h2>
                        <Input name='email' label="E-mail"/>
                        <button type='submit'>Enviar</button>
                    </fieldset>
                </form>
            </div>
        </HalfPageLogo>
    );
}

export default ForgotPassword;