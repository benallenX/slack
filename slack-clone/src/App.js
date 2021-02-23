import {Switch,Route,Link} from 'react-router-dom'
import{Header,Sidebar} from './components'
import './App.css';




function App() {
  return (
    <div className="app">
       <Header />

       <div className="app__body">
         <Sidebar/>
         <Switch>
            <Route path='/room/:roomId'>
              <h1> Chat Screen</h1>
            </Route>
            <Route path='/'>
              <h1>Welcome</h1>
            </Route>
         </Switch>
       </div>
    </div>
  );
}

export default App;
