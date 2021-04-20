
import { Redirect, Switch, HashRouter as Router, Route } from 'react-router-dom'
import './App.css';
import View1 from './Components/View1';
import View2 from './Components/View2';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`} component={View1} />
        <Route path={`/view2`} component={View2} />
        <Route path={`/*`}>
          <Redirect to={`/`} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
