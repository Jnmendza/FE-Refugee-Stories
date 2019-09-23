import React from 'react';
import './App.css';
import { Home, About, Stories, Navigation, Submit, Login } from './components';
import { Route } from "react-router-dom";





const App = () => (
  <div>
    <Navigation />
    
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route path="/stories" component={Stories} />
    <Route path="/submit" component={Submit} />
    <Route path="/login" component={Login} />

  </div>



);

export default App;
