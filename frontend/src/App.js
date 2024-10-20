import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Login from "./components/login";
import Home from './components/home';
import Register from './components/register';

function App() {
  return(
   <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
   </Router>
  )
}

export default App;
