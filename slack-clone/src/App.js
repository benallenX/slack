import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import{Header,Sidebar,Chats,Login} from './components'
import styled from 'styled-components'
import './App.css';




function App() {
  return (
    <div className="app">
       <Router>
        <Container>
           <Header />
          <Main>
            <Sidebar />
          <Switch>
          <Route path='/room'>
            <Chats/>
          </Route>
          <Route path='/'>
            <Login/>
          </Route>
          </Switch>
          </Main>
          </Container>
       </Router>
    </div>
  );
}

export default App;


const Container = styled.div ` 
width:100%;
height:100vh;
display:grid;
grid-template-rows: 38px auto;
`

const Main = styled.div ` 
 background-color: red;
  display:grid;
  grid-template-columns:260px auto;
`