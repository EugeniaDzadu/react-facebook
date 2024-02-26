import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <Routes>
            <Route path='/' Component={Index}/>

       </Routes>
    
    </BrowserRouter>
)
