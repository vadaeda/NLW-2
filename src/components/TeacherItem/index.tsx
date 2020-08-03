import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                     <header>
                         <img src={`https://scontent.fgig4-1.fna.fbcdn.net/v/t1.0-9/32073932_1549855698453937_7969392958250156032_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=ipkDwAmA1moAX9tmLkM&_nc_ht=scontent.fgig4-1.fna&oh=bc1bd87e8da95172b5fc079936ea7b84&oe=5F4E0F1A`} alt=""/>
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