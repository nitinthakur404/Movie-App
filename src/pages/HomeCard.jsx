import React, { useEffect, useState } from 'react'
import withAuth from '../utile/withAuth'
import Card from './Card'
import { AiOutlineConsoleSql } from 'react-icons/ai';



function HomeCard() {
    const [movieDetails, setmovieDetails] = useState([])
    const [MoiveGet, setMovieGet] = useState([])
    const [scrollPosition, setScrollPosition] = useState(0);
    const [pageNo, setpageNO] = useState(1)

    useEffect(() => {
        fatchMovieDetails()
    }, [pageNo])

    const fatchMovieDetails = () => {
        const data = withAuth({
            endPoint: `movie/popular?page=${pageNo}`,
            method: "get"
        })
        data.then((respones) => {
            setmovieDetails((prev) => [...prev, ...respones.results])
        })
    }
    const infiniateFetch = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setpageNO((prev) => prev + 1)
            }
        }
        catch (error) {
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', infiniateFetch);

        return () => {
            window.removeEventListener('scroll', infiniateFetch);
        };
    }, []);


    return (
        <div className="max-w-screen-3xl flex flex-col  my-5  ">
            <div className='flex justify-center '>
                <span className=' text-[20px] font-bold text-black ' > Upcoming Movies </span>
            </div>
            <div className=''>
                <Card MovieValue={movieDetails} />
            </div>
        </div>
    )
}

export default HomeCard