import Header from './Header';
import Main from './Main';
import { Route, Switch } from 'react-router-dom';
import '../css/App.css';

function App() {
  return (
    <div id="app">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
