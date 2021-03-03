import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Appointment from './pages/Appointment';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignUp} />
      <Route path="/appointment" exact component={Appointment} />
    </BrowserRouter>
  );
};

export default Routes;