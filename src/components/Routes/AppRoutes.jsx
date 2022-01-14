import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import DetailCoin from '../../pages/DetailCoin';

const AppRoutes = () => {
    return (      
        <BrowserRouter>
            <Routes>               
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/:id" element={<DetailCoin/>}/>        
            </Routes>          
        </BrowserRouter>
    )
}

export default AppRoutes
