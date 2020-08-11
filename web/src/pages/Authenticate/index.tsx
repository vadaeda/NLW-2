import React from 'react';

import logoImg from '../../assets/images/logo.svg'
import successImg from '../../assets/images/success-background.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import { Link } from 'react-router-dom';

function Authenticate (){
    return(
        <div className="page-authenticate">
            <div className="platform-content" style={
                    {
                        boxSizing: 'border-box',
                        backgroundImage:`url(${successImg})`,
                        backgroundSize: 'inherit',
                        backgroundRepeat: 'no',
                    }
                }
            >
            {/* <div className="platform-content" > */}
                <div className="logo-container" >
                        <img src={logoImg} alt=""/>
                        <h2>Sua plataforma de <br/>estudos online.</h2>
                </div>
                
                {/* <img src={successImg} alt="Plataforma de estudos" className="success-image"/> */}
            </div>

            <div className="authenticate-content">
                <form>
                    <fieldset>
                        <h1>Fazer login</h1>
                        <Input name='email' label="E-mail"/>
                        <Input name='password' label="Senha"/>
                        
                        <p>
                            <Checkbox name='remindme' label='Lembrar-me'/>
                            <Link to="/" className="link">Esqueci minha senha</Link>
                        </p>
                        <button type='submit'>Entrar</button>
                    </fieldset>

                    <footer>
                        <p>Não tem conta?<br/><Link to="/" className="link">Cadastre-se</Link></p>
                        <p>É de graça <img src={purpleHeartIcon} alt="Coração roxo"/></p>
                    </footer>
                </form>

                
            </div>
        
        </div>
    );
}

export default Authenticate;