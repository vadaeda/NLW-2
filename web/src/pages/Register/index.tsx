import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Input from '../../components/Input';
import HalfPageLogo from '../../components/HalfLogoPage';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function Register() {
    const { push } = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function handleRegisterRequest(e: FormEvent) {
        e.preventDefault();
        if (!name || !email || !password) {
            alert("Preencha todos os campos!")
            return 0;
        }
        try {
            const response = await api.post('users', {
                name,
                email,
                password
            })
            if(response){
                    push('/register/success');
            }
            
        } catch (error) {
            const errors = error.response.data.error;
            console.log(errors)
            alert(errors)
        }
    }
    
    return (
        <HalfPageLogo>
            <div className="register-content">
                <div className="link">
                    <Link to="/authenticate" ><img src={backIcon} alt="Voltar" /></Link>
                </div>
                <form onSubmit={handleRegisterRequest}>
                    <fieldset>
                        <h1>Cadastro</h1>
                        <h2>Preencha os dados abaixo para começar</h2>
                        <Input
                            name='name'
                            label='Nome completo'
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            name='email'
                            label='E-mail'
                            type='email'
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <Input
                            name='password'
                            label='Senha'
                            type='password'
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <button type='submit'>Concluir cadastro</button>
                    </fieldset>
                </form>
            </div>
        </HalfPageLogo>
    );
}

export default Register;