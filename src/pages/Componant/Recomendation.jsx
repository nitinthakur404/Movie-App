import React from 'react'

export default function Recomendation({ RecomendationDetails }) {

    console.log(RecomendationDetails, "RecomendationDetails")
    return (
        <div className=" cursor-pointer flex flex-col mx-3 text-stone-50 w-7/8  ">
            <span className=" font-semibold text-2xl mx-2 my-2 text-neutral-900 " style={{ fontFamily: "sandRegular" }}>Recommendations</span>
            <div className="flex flex-col justify-center  text-black w-[75%] h-[200px] overflow-auto mx-2 flex-wrap " >
                {RecomendationDetails.map((items) => {
                    return (<div className=" w-[250px] h-[190px] mx-[4px] mt-2 ">
                        <div>
                            <img src={`https://www.themoviedb.org/t/p/w250_and_h141_face/${items.backdrop_path}`} className='object-cover transition-opacity duration-300 hover:opacity-60'></img>
                        </div>
                        <div className='flex justify-between text-base mt-1' style={{ fontFamily: "sansPro " }} >
                            <span >{(items.title?.length > 20) ? items.title.slice(0, 25) + '...'
                                : items.title}</span>
                            <span>{Math.floor(items.vote_average * 10)} %</span>
                        </div>
                    </div>)
                })}


            </div>
        </div>
    )
}
