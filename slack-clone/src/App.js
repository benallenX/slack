import {Switch,Route,Link} from 'react-router-dom'
import{Header,Sidebar} from './components'
import './App.css';




function App() {
  return (
    <div className="app">
       <Header />

       <div className="app__body">
         <Sidebar/>
       </div>
      <Switch>
        <Route>
          <Link />
         
        </Route>
      </Switch>
    </div>
  );
}

export default App;
