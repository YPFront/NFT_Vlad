import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Page1A from './pages/page1a';
import Page1B from './pages/page1b';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/page1">
            <Page1A></Page1A>
          </Route>
          <Route path="/page2">
            <Page1B></Page1B>
          </Route>
          <Route path="/">
            <Page1A></Page1A>
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
