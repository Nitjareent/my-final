import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'


export default function App() {
  return (
    <div>
      <Home/>
     {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
        </Switch>
      </div>
    </Router> */}
    
    </div>
  );
}