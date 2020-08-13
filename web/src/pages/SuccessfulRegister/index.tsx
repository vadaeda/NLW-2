import React from 'react';
import Success from '../../components/Success';

function SuccessfulRegister(){
    return <Success 
                title="Cadastro salvo!" 
                description={`Agora você faz parte da plataforma da Proffy.\nTenha uma ótima experiência.`}
                buttonText="Voltar"
                route='/authenticate'
            />
}

export default SuccessfulRegister