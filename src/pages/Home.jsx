import React from 'react'
import HomeSlider from './HomeSlider'
import HomeCard from './HomeCard'
import Card from './Card'

function Home() {
    return (
        <div className='w-full'>
            <div className='flex' >
                <HomeSlider />
            </div>
            <HomeCard />
        </div>
    )
}

export default Home