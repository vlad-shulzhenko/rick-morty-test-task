import React from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Liked from '../pages/Liked';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/liked" element={<Liked />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Switch>
  );
};

export default Routes;
