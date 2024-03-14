import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Create from './components/Create';
import Home from './components/Home'
import Login from './components/Login'
import Update from './components/Update';
import Read from './components/Read';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
    <Route path='/' element={<Login/>}></Route> 
      <Route path='/users-list' element={<Home/>}></Route>
     <Route path='/create' element={<Create/>}></Route>
     <Route path='/update/:id' element={<Update/>}></Route>
     <Route path='/read/:id' element={<Read/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
