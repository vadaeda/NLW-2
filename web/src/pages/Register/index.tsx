import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import HalfPageLogo from '../../components/HalfLogoPage';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function Register(){
    return(
        <HalfPageLogo>
            <div className="register-content">
                <div className="link">
                    <Link to="/authenticate" ><img src={backIcon} alt="Voltar"/></Link>
                </div>
                <form>
                    <fieldset>
                        <h1>Cadastro</h1>
                        <h2>Preencha os dados abaixo para começar</h2>
                        <Input name='name' label='Nome completo'/>
                        <Input name='email' label='E-mail'/>
                        <Input name='password' label='Senha'/>
                        <button type='submit'>Concluir cadastro</button>
                    </fieldset>
                </form>
            </div>
        </HalfPageLogo>
    );
}

export default Register;