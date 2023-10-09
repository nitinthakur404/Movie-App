import React from 'react'
import { Link } from 'react-router-dom'

const Recomendation = ({ RecomendationDetails, RecomendatedMoiveTitle }) => {
    return (
        <div className=" cursor-pointer flex flex-col mx-3 text-stone-50 w-7/8  ">
            <span className=" font-semibold text-1xl mx-2 my-2 text-neutral-900 " style={{ fontFamily: "sandRegular" }}>Recommendations</span>
            {RecomendationDetails.length != 0 ?
                <div className="flex flex-col justify-center content-start text-black w-[75%] max-md:w-[98%] h-[200px] overflow-auto mx-2 flex-wrap " >
                    {RecomendationDetails.map((items) => {
                        return (
                            items.backdrop_path && <div className=" w-[250px] h-[190px] mx-[4px] mt-2"  >
                                <Link to={`/pageDetails/${items.id}/${items.title}`}>
                                    <div>
                                        <img src={`https://www.themoviedb.org/t/p/w250_and_h141_face/${items.backdrop_path}`} className=' rounded-md object-cover transition-opacity duration-300 hover:opacity-60'></img>
                                    </div>
                                    <div className='flex justify-between text-base mt-1' style={{ fontFamily: "sansPro " }} >
                                        <span >{(items.title?.length > 20) ? items.title.slice(0, 25) + '...'
                                            : items.title}</span>
                                        <span>{Math.floor(items.vote_average * 10)} %</span>
                                    </div>
                                </Link>
                            </div>
                        )

                    })
                    }
                </div> : <span className='mx-2 bottom-4 text-black'>We don't have enough data to suggest any movies based on {RecomendatedMoiveTitle}. You can help by rating movies you've seen.</span>
            }
        </div>
    )
}

export default Recomendation