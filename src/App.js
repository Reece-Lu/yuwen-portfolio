import React from 'react';
import NavigationBar from './components/NavigationBar';
import ProjectAPIs from './pages/ProjectAPIsPage/ProjectAPIs';
import Home from './pages/Home';
import ComputerPricePrediction from './pages/ComputerPricePrediction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/projectapis" element={<ProjectAPIs />} />
                <Route path="/computerpriceprediction" element={<ComputerPricePrediction />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
