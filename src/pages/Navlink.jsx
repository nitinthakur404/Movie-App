import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UpcomingPage from './Componant/UpcomingPage'
import Home from './Home'

function Navlink() {
    return (
        <Routes>
            <Route exactt path="/" element={<Home />} />
            <Route path="/UpComing" element={<UpcomingPage />} />
        </Routes>
    )
}

export default Navlink