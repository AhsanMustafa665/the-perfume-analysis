import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Reviews from './component/Reviews/Reviews';
import Dashboard from './component/Dashboard/Dashboard';
import Blogs from './component/Blogs/Blogs';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import Navbar from './component/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
