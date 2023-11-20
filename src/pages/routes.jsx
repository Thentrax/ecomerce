import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./main";
import ServicesPage from "./services";
import SupportPage from "./support";
import ProductPage from "./product";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
                <Route path="/support" element={<SupportPage/>}/>
                <Route path="/product/:id" element={<ProductPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;