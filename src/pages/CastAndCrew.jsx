import React from "react";
import UsefullDetails from "./UsefullDetails";

function CastAndCrew({ CastCrewProps, socialMedia, movieDetails }) {

    return (
        <div className=" cursor-pointer flex flex-col m-2 my-6 text-stone-50 w-full">
            <span className=" font-semibold mx-2 text-neutral-900 " style={{ fontFamily: "sandRegular" }}>Top Billed Cast</span>
            <div className="flex flex-wrap justify-center" >
                <div className="flex items-center  w-[73%] h-[330px] overflow-auto">
                    {CastCrewProps.credits?.cast.map((CastDetails) => {
                        return <> {CastDetails.profile_path && <div className="border rounded-md mx-1  mt-5 mb-6  w-[140px]  min-h-[270px] bg-white" >
                            <img loading="lazy" src={`https://image.tmdb.org/t/p/original/${CastDetails.profile_path}`} className='  w-[143px] h-[180px] rounded-sm' />
                            <div className="w-[145px] h-[40px] text-black flex flex-col m-1">
                                <span className="mx-[2px] leading-4 font-semibold text-lg ">{CastDetails.character}</span>
                                <span className="mt-1 mx-[2px] text-[12px] font-medium ">{CastDetails.name}</span>
                            </div>
                        </div>}
                        </>
                    })}
                </div>
                <div className=" relative bottom-[46px] mt-4 mx-3 w-[290px] border h-96  border-r-1 border-blue-500 rounded-md ">
                    <UsefullDetails socialMedia={socialMedia} movieDetails={movieDetails} />
                </div>
            </div>

        </div>
    );
}

export default CastAndCrew;

