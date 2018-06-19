import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FirstStep from "./components/FirstStep/FirstStep";
import SecondStep from "./components/SecondStep/SecondStep";
import ThirdStep from "./components/ThirdStep/ThirdStep";
import Card from './components/Card/Card';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className='app'>
    <Navigation />
    <div className="main1">

    <Main/>

<Footer />
</div>
  </div>
);

const first = () => (
  <div className='first'>
  <FirstStep />
  </div>
);

const second = () => (
  <div className='second'>
    <SecondStep />
  </div>
);

const third = () => (
  <div className='third'>
    <ThirdStep />
   
  </div>
);
const Main = () => (
  <Switch>
 <Route exact path='/' component={first}></Route>
 <Route exact path='/second' component={second}></Route>
 <Route exact path='/third' component={third}></Route>
  </Switch>
);
export default App;