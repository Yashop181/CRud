
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home'
import Insert from './pages/Insert';
import Display from './pages/Display';
import Search from './pages/Search';
import Edit from './pages/Edit';
import Delete from './pages/Delete';

function App() {
  return (
    [
      <Navbar></Navbar>,
      <Routes>
          <Route path='/' Component={Home} exact></Route>
          <Route path='/insert' Component={Insert} exact></Route>
          <Route path='/display' Component={Display} exact></Route>
          <Route path='/search' Component={Search} exact></Route>
          <Route path='/edit' Component={Edit} exact></Route>
          <Route path='/delete' Component={Delete} exact></Route>
      </Routes>,
      //for scroll you can delete it
      
    ]
  );
}

export default App;
