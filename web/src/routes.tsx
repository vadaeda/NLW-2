import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import Authenticate from './pages/Authenticate'
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';

function Routes(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing}/>
            <Route path='/authenticate' component={Authenticate} />
            <Route path='/register' component={Register} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
        </BrowserRouter>
    );
}

export default Routes;