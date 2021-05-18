import { Route, Router } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { history } from './history';

export const Routes = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={Dashboard} />
    </Router>
  );
};

export default Routes;