import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import HalfPageLogo from '../../components/HalfLogoPage';

import './styles.css';

function Authenticate (){
    return(
        <HalfPageLogo>
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
        </HalfPageLogo>
    );
}

export default Authenticate;