import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import withAuth from '../utile/withAuth'
import { AiFillStar } from 'react-icons/ai'

function HomeSlider() {
    const [movieDetails, setmovieDetails] = useState([])

    useEffect(() => {
        let respones = withAuth({
            endPoint: "movie/popular",
            method: "GET"


        })
        respones.then((data) => {
            setmovieDetails(data.results)

        })
    }, [])

    return (
        <Carousel className='w-full justify-center mx-2'
            showArrows={false} autoPlay={false} interval={1800} infiniteLoop={true}
            showIndicators={true} showThumbs={false} showStatus={false}>
            {movieDetails.map((value) => {
                return (
                    <div className='flex justify-center max-es:hidden relative w-full  max- flex-wrap '>
                        <img src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`} className=' rounded-3xl  max-lg:h-[400px] object-fill block h-[490px] mx-2 max-sm:mx-1 max-md:h-96 scale-100 max-sm:scale-y-70 '>
                        </img>
                        <div className='absolute bg-gradient-to-t from-slate-600 w-[99%]  rounded-3xl  max-lg:h-[400px] object-fill  h-[490px] mx-2 max-sm:mx-1 max-md:h-96 scale-100 max-sm:scale-y-70 items-center justify-center flex '>

                            <div className=' text-yellow-50 flex flex-col justify-center items-center mx-2 relative '  >
                                <div className=' mt-2'>
                                    <span className='  text-2xl max-sm:text-2xl font-bold'>{value.original_title
                                    }</span>
                                </div>

                                <div className=' text-2xl flex my-1 justify-center items-center'>
                                    <span>{value.release_date}</span>
                                    <div className='flex flex-row justify-center items-center'>
                                        <span className='ml-3'>{value.vote_average} </span>
                                        <span><AiFillStar color='gold' /></span>
                                    </div>
                                </div>

                                <div className=" w-[500px] max-lg:w-[450px] max-sm:w-[200px] " style={{ lineHeight: "1" }}>
                                    <span className=' text-[12px] ' >
                                        {value.overview}
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })
            }
        </Carousel>
    )
}

export default HomeSlider