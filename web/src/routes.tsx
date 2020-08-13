import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import Authenticate from './pages/Authenticate'
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import SuccessfulRegister from './pages/SuccessfulRegister';
import SuccessForgotPasswordMailSend from './pages/SuccessForgotPasswordMailSend';
import SuccessTeacherForm from './pages/SuccessTeacherForm';

function Routes(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing}/>

            <Route path='/authenticate' component={Authenticate} />

            <Route exact path='/register' component={Register} />
            <Route path="/register/success" component={SuccessfulRegister}/>

            <Route exact path='/forgot-password' component={ForgotPassword} />
            <Route path="/forgot-password/success" component={SuccessForgotPasswordMailSend}/>


            <Route exact path="/give-classes" component={TeacherForm}/>
            <Route path="/give-classes/success" component={SuccessTeacherForm}/>

            <Route path="/study" component={TeacherList}/>
        </BrowserRouter>
    );
}

export default Routes;