import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import Home from './views/Home';
import Objectives from './views/Objectives';
import Products from './views/Products';
import FAQs from './views/FAQs';

function RouterComponent() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/objectives' element={<Objectives />} />
            <Route path='/products' element={<Products />}/>
            <Route path='/faqs' element={<FAQs />}/>
          </Routes>
        </div>
      </Router>
    );
}
  
export default RouterComponent;
