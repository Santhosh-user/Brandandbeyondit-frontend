
import './App.css';

import {Routes,Route} from "react-router-dom" 
import Signin from './components/Signin';

import Admin from './components/Admin';
import Redirection from './components/Redirection';
import Homepage from './components/Homepage';

function App() {

  return (

    <Routes>
    <Route path='/' element={<Signin></Signin>}/>
    <Route path='/home' element={<Redirection></Redirection>}/>
    <Route path='/admin' element={<Admin></Admin>}/>
    <Route path="/homepage" element={<Homepage> </Homepage>} ></Route>
    </Routes>
   
  );
}

export default App;
