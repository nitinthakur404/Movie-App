import React from 'react'
import HomeSlider from './HomeSlider'
import HomeCard from './HomeCard'

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