import React from 'react'
import HomeSlider from './HomeSlider'
import PopularHome from './PopularHome'
import Card from './Card'

function Home() {
    return (
        <div className='flex flex-col'>
            <HomeSlider />
            <PopularHome />

        </div>
    )
}

export default Home