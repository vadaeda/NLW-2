import React from 'react';

import api from '../../services/api';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import './styles.css'

export interface iTeacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface iTeacherInterface {
    teacher: iTeacher;
}

const TeacherItem: React.FC<iTeacherInterface> = ({ teacher }) => {

    function createNewConnection(){
        api.post('connections',{
            user_id: teacher.id
        })
    }

    return(
        <article className="teacher-item">
                     <header>
                         <img src={ teacher.avatar } alt=""/>
                         <div>
                             <strong>{ teacher.name }</strong>
                             <span>{ teacher.subject }</span>
                         </div>
                     </header>

                    <p>{ teacher.bio }</p>
                    
                    <footer>
                        <p>
                            Preço/hora 
                            <strong>{ teacher.cost }</strong>
                        </p>
                        <a 
                        target='blank'
                        onClick={createNewConnection}
                        href={`https://wa.me/${teacher.whatsapp}`}>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </a>
                    </footer>
                </article>
    );
}

export default TeacherItem;