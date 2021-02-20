import {Switch,Route,Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route>
          <Link />
          <h1>Hello</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
