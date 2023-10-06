import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UpcomingPage from './Componant/UpcomingPage'
import DetailsPage from './DetailsPage'
import Home from './Home'
import TopRated from './TopRated'
import ErrorPage from './ErrorPage'

function Navlink() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/UpcomingMovie" element={<UpcomingPage />} />
            <Route path="/pageDetails/:id/:name" element={<DetailsPage />} />
            <Route path="/Top_Rated" element={<TopRated />} />
            {/* Add a catch-all route for 404 */}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default Navlink