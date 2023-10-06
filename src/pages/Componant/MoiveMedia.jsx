import { useState } from 'react'
import React from 'react'
import VideoShowModal from './VideoShowModal'
import PlayButton from '../../image/playButton.svg'
import { FaPlay } from 'react-icons/fa'
export default function MoiveMedia({ MovieVideo, movieImages }) {
    const [openmodal, setopenmodal] = useState(false)
    const [showMedia, setshowMedia] = useState("video")
    const Videos = MovieVideo?.videos?.results
    const backdrops = movieImages?.backdrops
    const Posters = movieImages?.posters

    console.log(Posters?.length, "Posters")
    return (
        <>
            <div className=" cursor-pointer flex flex-col mx-3 w-7/8 max-md:mt-4 ">
                <div className='flex flex-row items-center max-md:flex-col max-md:items-start '>
                    <span className=" font-semibold text-2xl mx-2 my-2 text-neutral-900 max-md:flex-col max-md:mb-1  " style={{ fontFamily: "sandRegular" }}>Media</span>
                    <div className=' '>
                        <ul className='text-black flex font-semibold text-base max-md:mb-5 flex-wrap'  >
                            <li className='mx-3' onClick={() => { setshowMedia("video") }} > Videos <span className=' text-gray-600'>{Videos?.length}</span> </li>
                            <li className='mx-3 ' onClick={() => { setshowMedia("Backdrops") }} >Backdrops <span className=' text-gray-600'>{backdrops?.length}</span></li>
                            <li className='mx-3' onClick={() => { setshowMedia("posters") }} >Posters <span className=' text-gray-600'>{Posters?.length}</span></li>
                        </ul>
                    </div>
                </div>
                <div className=" flex flex-col justify-center content-start text-black w-[75%]  overflow-auto mx-2 flex-wrap max-md:w-[98%] 
                " >
                    {/* video */}
                    {showMedia == "video" && <div className='flex flex-row'>
                        {Videos?.map((items) => {
                            return (<>
                                <div className=" w-[400px] h-[260px] mx-[1px] mt-2  max-md:w-[200px] max-md:h-[200px]" onClick={() => { setopenmodal(true) }} >

                                    <div className=' relative'>
                                        <img src={`https://i.ytimg.com/vi/${items.key}/hqdefault.jpg`} className=' w-[400px] h-[250px] max-md:w-[250px]  max-md:h-[170px] rounded-md  transition-opacity duration-300 hover:opacity-60'></img>
                                    </div>
                                    <div className=' relative w-20 h-20 max-md:w-14 max-md:h-14 max-md:bottom-[54%]  items-center  bg-slate-500 flex justify-center rounded-full bottom-[64%] left-[40%] ' style={{ backgroundColor: `rgba(0,0,0,.7)`, fill: `` }}>
                                        <FaPlay className='text-white text-[48px] max-md:text-[28px] ml-2 ' />
                                    </div>
                                </div>

                                <VideoShowModal videoID={items.key} openModal={openmodal} modalHandle={setopenmodal} />
                            </>)
                        })}
                    </div>}

                    {/* backdrops images */}

                    {showMedia == "Backdrops" && < div className='flex flex-row '>
                        {backdrops?.map((items) => {
                            return (<div>
                                <div className="  w-[400px] h-[270px] mx-[1px] mt-2  max-md:w-[300px] 
                  " onClick={() => { setopenmodal(true) }} >
                                    <div>
                                        <img src={`https://image.tmdb.org/t/p/original/${items.file_path}`} className=' w-[400px] h-[270px] max-md:w-[250px]  max-md:h-[170px] rounded-md  transition-opacity duration-300 hover:opacity-60'></img>
                                        <div class="play_background"><span class="glyphicons_v2 play invert svg"></span></div>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>}

                    {showMedia == "posters" && <div className='flex flex-row '>
                        {Posters?.map((items) => {
                            return (<div>
                                <div className="w-[180px] h-[270px] max-md:w-[120px] max-md:h-[170px] mt-2">
                                    <div>
                                        <img src={`https://image.tmdb.org/t/p/original/${items.file_path}`} className=' w-[200px] h-[270px] max-md:w-[120px] max-md:h-[170px] object-contain rounded-md transition-opacity duration-300 hover:opacity-60'></img>
                                        <div class="play_background"><span class="glyphicons_v2 play invert svg"></span></div>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>}
                </div>
            </div>
        </>
    )
}
