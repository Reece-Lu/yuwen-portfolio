import React from 'react';
import NavigationBar from './components/NavigationBar';
import OpenAPI from './pages/OpenAPI';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/openapi" element={<OpenAPI />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
