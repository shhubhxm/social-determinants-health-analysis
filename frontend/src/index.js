// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Research from './pages/research';
import Map from './pages/map';
import MoreInfo from './pages/more_info';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/map" element={<Map />} />
            <Route path="/more-info" element={<MoreInfo />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);
