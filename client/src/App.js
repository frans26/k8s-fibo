import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/otherpage">Other page</Link>
            </li>
          </ul>
        </header>

        <hr />

        <Switch>
          <Route exact path="/" >
            <Fib />
          </Route>
          <Route path="/otherpage">
            <OtherPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
