import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                     <header>
                         <img src={`https://igd-wp-uploads-pluginaws.s3.amazonaws.com/wp-content/uploads/2016/05/30105213/Qual-e%CC%81-o-Perfil-do-Empreendedor.jpg`} alt=""/>
                         <div>
                             <strong>Nome Sobrenome</strong>
                             <span>Materia</span>
                         </div>
                     </header>

                    <p>Texto TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto Texto 
                        <br/>
                        Texto TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto TextoTexto Texto
                    </p>
                    
                    <footer>
                        <p>
                            Preço/hora 
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;