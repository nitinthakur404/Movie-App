import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import withAuth from '../utile/withAuth'
import { AiFillStar } from 'react-icons/ai'
import Card from './Card'



function PopularHome() {
    const [movieDetails, setmovieDetails] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        const data = withAuth({
            endPoint: "movie/popular",
            options: {
                method: "get"
            }
        })
        data.then((respones) => {
            setmovieDetails(respones.results)

        })

    }, [])
    console.log(movieDetails, "conole.log")


    return (
        <div className="max-w-screen-3xl flex flex-col  my-5  ">
            <div className='flex justify-center '>
                <span className=' text-[20px] font-bold text-white ' > Upcoming Movies </span>
            </div>
            <div>
                <Card MovieValue={movieDetails} />
            </div>
        </div>
    )
}

export default PopularHome