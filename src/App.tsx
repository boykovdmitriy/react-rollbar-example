import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { WeatherPage } from './pages/weatherPage';

function App() {
  return (
    <Switch>
      <Route path="/city/:city">
        <WeatherPage />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
