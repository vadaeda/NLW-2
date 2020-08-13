import React from 'react';
import Success from '../../components/Success';

function SuccessForgotPasswordMailSend() {
    return <Success
                title="Redefinição enviada!"
                description={`Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.`}
                buttonText="Voltar ao login"
                route='/authenticate'
            />
}  

export default SuccessForgotPasswordMailSend