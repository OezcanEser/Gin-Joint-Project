import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from "./Components/Header"
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/contact">
            <p>Contact</p>
          </Route>
          <Route path="/events">
            <p>Events</p>
          </Route>
          <Route path="/shop">
            <p>Shop</p>
          </Route>
          <Route path="/entertainment">
            <p>Entertainment</p>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
