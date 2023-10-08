import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import withAuth from '../utile/withAuth'
import { AiFillStar } from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom";

function Card({ MovieValue }) {
    let history = useNavigate()
    const [loading, setloading] = useState(true)

    setTimeout(() => {
        setloading(false)
    }, 2500);

    return (
        <div className='flex flex-wrap mx-4 justify-center'>
            {MovieValue?.map((value) => {
                return (
                    <div className='flex mt-2 items-baseline'>
                        <Link to={`/pageDetails/${value.id}/${value.title}`}>
                            {loading ? <Skeleton className='w-36 mx-2 rounded-md hover:scale-110 transition duration-500 cursor-pointer object-cover' width={"144px"} height={"208px"} baseColor='#b8bcc1' /> :
                                <div className=' relative w-36 h-52 mx-2 text-white   rounded-xl  mt-6 hover:scale-110 transition  duration-500 cursor-pointer group'>
                                    <div className=''>
                                        <img src={`https://image.tmdb.org/t/p/original/${value?.poster_path}`} className='rounded-xl' />
                                    </div>
                                    <div className=' absolute  left-0 top-0  w-36 h-52 my-2  rounded-xl   hidden group-hover:flex  bg-gradient-to-t from-slate-600 transition-all duration-500 cursor-pointer justify-between items-end' >
                                        <div className='text-[12px] m-2  '>
                                            <div>
                                                <span className='flex text-sm line leading-[1.2] font-semibold '>{value.title} </span>
                                            </div>
                                            <div className='flex items-center justify-between my-1 '>
                                                <span>{value.release_date}</span>
                                                <span className='flex items-center '>
                                                    {value.vote_average} <AiFillStar className='ml-1 text-sm text-yellow-500' /></span>
                                            </div>
                                            <div className='flex text-[10px] leading-3'>
                                                <span >{(value?.overview?.length > 200) ? value.overview.substring(0, 190) : value.overview}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                        </Link>
                    </div>
                )
            })}
        </div>


    )
}

export default Card