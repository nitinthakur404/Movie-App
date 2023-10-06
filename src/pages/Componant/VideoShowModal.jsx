import React, { useEffect } from 'react'

function VideoShowModal({ videoID, openModal, modalHandle }) {
    return (
        <div>
            <div id="defaultModal" className={` fixed flex ${openModal ? "flex" : "hidden"} transition ease-in-out delay-150 justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative top-3 w-full max-w-2xl max-h-full">
                    <div className="relative top-2 bg-black rounded-lg shadow dark:bg-gray-700">

                        <div className=' flex  items-center mx-2 '>
                            <span className='m-2 text-white' style={{ fontFamily: "notosans" }} >Play Trailer</span>
                            <button type="button" onClick={() => { modalHandle(false) }} className="   text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" str oke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>


                        {/* <!-- Modal body --> */}

                        {
                            openModal && <div className="p-1 space-y-8">
                                <iframe id="videoTrailer" className=" w-full aspect-video ..." src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default VideoShowModal