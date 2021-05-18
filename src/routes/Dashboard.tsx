import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './history';
import DashboardPage from '../pages/Dashboard';

export const Dashboard = () => {
  return (
    <Router history={history}>
      <Route path="/" component={DashboardPage} />
    </Router>
  );
};