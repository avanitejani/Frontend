// import logo from './logo.svg';
import './App.css';
// import Head from './Head';
import Header from './01_Header';
import Contact from './05_Contact';
import Home from './04_Home';

import { Routes, Route } from 'react-router-dom'




function App() {

  return (
    <>
    {/* <Head /> */}
    {/* <h1>hader</h1> */}


    <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </>
  );
}

      export default App;
      
      
