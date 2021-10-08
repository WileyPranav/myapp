
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Lists from './components/Lists';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SubDetails from './components/SubDetails';
import AddSub from './components/AddSub';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/Lists" >
              <Lists />
            </Route>
            <Route path="/AboutMe" component={AboutMe} />
            <Route path ="/subjects/:no">
              <SubDetails/>
            </Route>
            <Route path="/AddSubject" component = {AddSub}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
