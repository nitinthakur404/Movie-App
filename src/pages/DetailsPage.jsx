import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import withAuth from '../utile/withAuth'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { BsFillPlayFill } from 'react-icons/bs'
import VideoShowModal from './Componant/VideoShowModal';
import CastAndCrew from './CastAndCrew';
import Recomendation from './Componant/Recomendation';
import MoiveMedia from './Componant/MoiveMedia';

function DetailsPage({ match }) {
    console.log(match, "match")
    const location = useLocation()
    const { id } = useParams()
    const [movieDetails, setmovieDetails] = useState([])
    const [movieTrailer, setMovieTrailer] = useState("")
    const [openmodal, setopenmodal] = useState(false)
    const [castCraw, setCastCrew] = useState([])
    const [socialMediaID, setSocialMediaID] = useState([])
    const [movieRecommendation, setMovieRecommendation] = useState([])
    const [movieImages, setMovieImages] = useState([])


    useEffect(() => {

        window.scrollTo(0, 0)
        const data = withAuth({
            endPoint: `movie/${id}?append_to_response=videos`,
            method: "get"
        })
        data.then((respones) => {
            setmovieDetails(respones)
            respones.videos.results.filter((value) => {
                if (value.name.includes("Trailer")) {
                    setMovieTrailer(value.key)
                }
            })

        })
        getCastCrew()
        RecommendationsMoive()
        fetchSocialMedia()
        fetchMovieImages()
    }, [id])

    const RecommendationsMoive = () => {
        const data = withAuth({
            endPoint: `movie/${id}/recommendations`,
            method: "get"
        })
        data.then((respones) => {
            console.log(respones.results
                , "/recommendations")
            setMovieRecommendation(respones.results)

        })
    }

    const getCastCrew = () => {
        const data = withAuth({
            endPoint: `movie/${id}?append_to_response=credits`,
            method: "get"
        })
        data.then((respones) => {
            setCastCrew(respones)
        })
    }

    const fetchSocialMedia = () => {
        const data = withAuth({
            endPoint: `movie/${id}/external_ids`,
            method: "get"
        })
        data.then((respones) => {
            setSocialMediaID(respones)
        })
    }

    const fetchMovieImages = () => {
        const data = withAuth({
            endPoint: `movie/${id}/images`,
            method: "get"
        })
        data.then((respones) => {
            setMovieImages(respones)
        })
    }

    return (

        <div className='' >
            <div className='flex justify-center max-es:hidden relative w-full  max- flex-wrap'>
                <img src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`} className={` w-full rounded-3xl  max-lg:h-[400px] object-fill block h-[490px] mx-2 max-sm:mx-1 max-md:h-96 scale-100 max-sm:scale-y-70  `}>
                </img>
                <div className='absolute bg-gradient-to-t from-slate-600 w-[99%]  rounded-3xl  max-lg:h-[400px] object-fill  h-[490px] mx-2 max-sm:mx-1 max-md:h-96 scale-100 max-sm:scale-y-70 items-center justify-center flex   '>

                    {movieDetails.poster_path && <div className=' mx-8 max-xs:hidden'>
                        <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} className='w-64 h-auto rounded-md' />
                    </div>}
                    {movieDetails.release_date && <div className='relative text-white w-11/12 flex flex-col' >
                        <div className='flex items-center'>
                            <span className=' text-[33px]  max-lg:text-[27px] max-md:text-[22px]   font-extralight leading-9' style={{ fontFamily: "notosans" }}>{movieDetails.original_title} {`(${movieDetails.release_date.substring(0, 4)})`} </span>

                        </div>
                        <div className=' w-10/12 mt-1 max-xs:text-sm'>
                            {<span className='cerificate text-sm  mr-1 border border-[0.1] px-1 border-[#B3E5F8] fon'>UA</span>}
                            <span className='release_date mx-1'>{`${movieDetails.release_date} (IN)`}</span>
                            <span className='mx-1'>{movieDetails?.genres?.map((data) => {
                                return <span className='mx-1'>{data.name}</span>

                            })}</span>
                            <span className='mx-1'>{`${Math.floor(movieDetails.runtime / 60)}h  ${movieDetails.runtime % 60}M`}</span>
                        </div>
                        <div className='my-3 flex  items-center   '>
                            <span className='block w-11 hover:scale-125 transition duration-500 cursor-pointer mx-1'>
                                <CircularProgressbar value={movieDetails.vote_average * 10} text={`${Math.floor(movieDetails.vote_average * 10)} % `} styles={buildStyles({
                                    textSize: '28px', transition: 'stroke-dashoffset 0.5s ease 0s',
                                    backgroundColor: "white",
                                    textColor: "#fff",
                                    pathColor: "#fff",
                                    trailColor: "gray",
                                    rotation: 0.25,
                                })} />
                            </span>
                            <span className='ml-2 text-base font-medium leading-5' style={{ fontFamily: "sandRegular" }} >
                                User<br /> Score
                            </span>
                            <span onClick={() => { setopenmodal(true) }} style={{ fontFamily: "sandRegular" }} className='flex items-center text-base ml-5 hover:scale-105 transition duration-500 cursor-pointer mx-1 '>
                                <BsFillPlayFill className='text-2xl mt-1' color={movieTrailer ? "green" : "white"} /> Play Trailer
                            </span>
                        </div>
                        <div className='mt-4 max-md:mt-1'>
                            <span className='my-2'>
                                {movieDetails.tagline}
                            </span>
                            <div className='my-5 max-md:my-1'>
                                <span className='my-5 max-md:my-2'>Overview</span>
                                <span className=' w-11/12  flex leading-5 text-[15px]  max-lg:text-[13px] max-md:text-[12px] max-md:leading-4'>

                                    {(movieDetails?.overview?.length > 270) ? movieDetails.overview.substring(0, 270) : movieDetails.overview}
                                </span>
                            </div>
                        </div>
                    </div>}
                </div>
                <VideoShowModal videoID={movieTrailer} openModal={openmodal} modalHandle={setopenmodal} />
            </div>

            <div className='mx-2 w-full'>
                <CastAndCrew CastCrewProps={castCraw} socialMedia={socialMediaID} movieDetails={movieDetails} />
            </div>

            <div className='mx-2 w-full  relative bottom-20'>
                <MoiveMedia MovieVideo={movieDetails} movieImages={movieImages} />
            </div>
            <div className='mx-2 w-full relative bottom-20 '>
                <Recomendation RecomendationDetails={movieRecommendation} RecomendatedMoiveTitle={movieDetails.original_title} />
            </div>
        </div>
    )
}

export default DetailsPage