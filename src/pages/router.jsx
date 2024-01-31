import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './inicio';



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portafolio" element={<Inicio/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;