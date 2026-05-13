import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllHotel from './AllHotel';
import Navbar from './Components/Navbar';
import SingleHotel from './SingleHotel';
import Home from './Home';
import NewHotel from './NewHotel';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
<Route path='/összeshotel' element={<AllHotel/>}/>
<Route path='/data/:id' element={<SingleHotel/>}/>
<Route path='/uj-szallas' element={<NewHotel/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
