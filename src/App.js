
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './container/Home/Home';
import CeilingFan from './container/CeilingFan'

function App() {
  return (
    <>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path="/ceiling-fan" component={CeilingFan}/>
    </Switch>
    </>
  );
}

export default App;
