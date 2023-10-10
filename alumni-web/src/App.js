import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import PageNavbar from './components/PageNavbar'
import People from './components/FindPeople/People';
import SingleRegister from './components/Register/SingleRegister'
import BulkRegister from './components/Register/BulkRegister';

const App = () => {
    return (
        <BrowserRouter>
              <Navbar/>
              <PageNavbar/>
              <Routes>
                <Route path='/find-people' element={<People/>}></Route>
                <Route path='/single-register' element={<SingleRegister/>}></Route>
                <Route path='/bulk-register' element={<BulkRegister/>}></Route>
              </Routes>
        </BrowserRouter>
    );
}

export default App;