import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navlink from './Navlink'
import Logo from '../image/TMDB.png'

function Navbar() {
    const [toggle, settoggle] = useState("hidden")

    const UpdateToggle = () => {
        settoggle(toggle == "hidden" ? 'block' : "hidden")
    }

    return (
        <nav class="border-gray-200 dark:bg-gray-900 rounded-lg m-2 z-40 relative" style={{ backgroundColor: "#314154" }} >
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                <a href="/" class="flex items-center">
                    <img src={Logo} class="h-14 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap  max-sm:hidden dark:text-white">TMDB</span>
                </a>
                <button onClick={() => { UpdateToggle() }} class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">


                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class={`${toggle} w-full md:block md:w-auto `} id="navbar-default ">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700   transition-[display] duration-500 ease-out " style={{ backgroundColor: "#314154" }}>
                        <li>
                            <Link to="/" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">Home</Link>
                        </li>
                        <li>
                            <Link to="/UpcomingMovie" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">Upcoming</Link>
                        </li>
                        <li>
                            <Link to="/Top_Rated" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">Top Rated</Link>
                        </li>

                    </ul>
                </div>
            </div>

        </nav>

    )
}


export default Navbar