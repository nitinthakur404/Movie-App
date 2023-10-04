import React from 'react'
import HomeSlider from './HomeSlider'
import HomeCard from './HomeCard'
import Card from './Card'

function Home() {
    return (
        <div className='flex flex-col'>
            <HomeSlider />
            <HomeCard />
        </div>
    )
}

export default Home