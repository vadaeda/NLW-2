import React from 'react';

import Success from "../../components/Success";

function SuccessTeacherForm(){
    return <Success
                title="Cadastro salvo!"
                description={`Tudo certo, seu cadastro está na nossa lista de professores.\nAgora é só ficar de olho no seu WhatsApp.`}
                buttonText="Acessar lista"
                route='/study'
            />
}

export default SuccessTeacherForm;