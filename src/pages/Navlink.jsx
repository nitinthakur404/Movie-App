import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UpcomingPage from './Componant/UpcomingPage'
import DetailsPage from './DetailsPage'
import Home from './Home'
import TopRated from './TopRated'

function Navlink() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/UpcomingMovie" element={<UpcomingPage />} />
            <Route path="/pageDetails" element={<DetailsPage />} />
            <Route path="/Top_Rated" element={<TopRated />} />
        </Routes>
    )
}

export default Navlink