import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import { PersonListTable } from './components/PersonListTable';
import { Details } from './components/Details';
import { PageNotFound } from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <PersonListTable />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
        <Route path="*" exact>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
