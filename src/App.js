import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Landingpage from './Pages/Landingpage';
import Watchhistory from './Pages/Watchhistory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

<Header/>
<Routes>
  <Route path='/' element={<Landingpage/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/watch-history' element={<Watchhistory/>}/>   
</Routes>
<hr />
<Footer/>

    </div>
  );
  }

export default App;
