import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import Data from './components/Data';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("api/product", requestOptions)
      .then(response => response.text())
      .then(result => console.log(JSON.parse(result)))
      .catch(error => console.log('error', error))
  });
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tweets" exact component={Tweet} />
            <Route path="/data" exact component={Data} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
