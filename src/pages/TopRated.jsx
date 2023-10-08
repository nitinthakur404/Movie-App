import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import withAuth from '../utile/withAuth';

function TopRated() {

    const [PopularMovie, setPopularMovie] = useState([])
    const [pageNo, setpageNO] = useState(1)

    useEffect(() => {
        fatchMovieDetails()
    }, [pageNo])

    const fatchMovieDetails = () => {
        const data = withAuth({
            endPoint: `movie/top_rated?page=${pageNo}`,
            method: "get"
        })
        data.then((respones) => {
            setPopularMovie((prev) => [...prev, ...respones.results])
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
        <div className="max-w-screen-3xl flex flex-col  my-3 justify-center">
            <div className='flex justify-center '>
                <span className=' text-[20px] font-bold ' > Top Rated Movies </span>
            </div>
            <div className=''>
                <Card MovieValue={PopularMovie} />
            </div>
        </div>
    )

}

export default TopRated