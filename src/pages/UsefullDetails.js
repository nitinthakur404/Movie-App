import React from 'react'
import { FaFacebookSquare, FaLink } from "react-icons/fa"
import { BiLogoTwitter, BiLogoInstagram } from "react-icons/bi"
import { PiSwatchesFill } from "react-icons/pi"

function UsefullDetails({ socialMedia, movieDetails }) {
    console.log(movieDetails.spoken_languages, "movieDetails")

    return (
        <div className='mx-2 '>
            <div className=" flex  mt-3  ">
                {socialMedia.facebook_id && <span>
                    <a href={`https://www.facebook.com/${socialMedia.facebook_id}`} target="_blank">
                        <FaFacebookSquare className=' text-3xl text-black  mx-[8px]  border-r-1 border-blue-500 ' />
                    </a>
                </span>}

                {socialMedia.instagram_id && <span>
                    <a href={`https://www.instagram.com/${socialMedia.instagram_id}`} target="_blank">
                        <BiLogoInstagram className=' text-3xl text-black  mx-[8px]  border-r-1 border-blue-500 ' />
                    </a>
                </span>}

                {socialMedia.twitter_id && <span>
                    <a href={`https://twitter.com//${socialMedia.twitter_id}`} target="_blank">
                        <BiLogoTwitter className=' text-3xl text-black  mx-[8px]  border-r-1 border-blue-500 ' />
                    </a>
                </span>}
                {movieDetails?.homepage && <span>
                    <a href={`${movieDetails?.homepage}`} target="_blank">
                        <PiSwatchesFill className=' text-3xl text-black  mx-[8px]  border-r-1 border-blue-500 ' />
                    </a>
                </span>}

            </div>


            <div className=' text-black mt-4 mx-1'>
                {movieDetails.original_title &&
                    <div className='flex flex-col '>
                        <span className=' font-semibold text-base'>Original Title</span>
                        <span>{movieDetails.original_title}</span>
                    </div>}

                {movieDetails.status && <div className='flex flex-col mt-5'>
                    <span className='font-semibold text-base'>Status</span>
                    <span className='text-sm'>{movieDetails.status}</span>
                </div>}

                {movieDetails?.spoken_languages && <div className='flex flex-col mt-5 ' >
                    <span className='font-semibold text-base'>Original Language</span>
                    <span className='text-sm'> {movieDetails?.spoken_languages?.map((items) => {
                        return <span className='mr-1'>{items.english_name}</span>
                    })}</span>
                </div>
                }


                <div className=' flex-col mt-5' style={{ display: movieDetails.budget ? "flex" : "none" }} >
                    <span className='font-semibold text-base'> Budget </span>
                    <span className='text-sm'> {`$${movieDetails.budget}`}</span>
                </div>

                <div className='flex flex-col mt-5 text-base' style={{ display: movieDetails.revenue ? "flex" : "none" }}>
                    <span className='font-semibold'> Revenue </span>
                    <span className=' text-sm'>{`$${movieDetails.revenue}`} </span>
                </div>

            </div>
        </div>
    )
}

export default UsefullDetails