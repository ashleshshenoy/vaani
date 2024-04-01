import React from "react"
import { useNavigate } from "react-router"

export default function Landing() {
    const navigate = useNavigate()
  return (
<div className="overflow-x-hidden antialiased">
    <header className="relative z-50 w-full h-24">
        <div
            className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">

            <a href="/" className="relative flex items-center inline-block h-5 h-full font-black leading-none">
                <img src="/logo.png" width="30" height="30" alt=""></img>
                <span className="ml-3 text-xl text-gray-800">Vaani ISL<span className="text-pink-500">.</span></span>
            </a>

            <nav id="nav"
                className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative">
                <a href="#features"
                    className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Features</a>
                {/* <a href="#pricing"
                    className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Pricing</a> */}
                <a href="#testimonials"
                    className="font-bold duration-100 transition-color hover:text-indigo-600">Testimonials</a>
               
            </nav>

            <div
                className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
                <a onClick={()=> navigate('/app')}
                    className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-indigo-700 rounded shadow-md fold-bold lg:bg-white lg:text-indigo-700 sm:w-full lg:shadow-none hover:shadow-xl">Get
                    Started</a>
                <svg className="absolute top-0 left-0 hidden w-screen max-w-3xl -mt-64 -ml-12 lg:block"
                    viewBox="0 0 818 815" xmlns="http://www.w3.org/2000/svg" >
                    <defs>
                        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
                            <stop stopColor="#E614F2" offset="0%" />
                            <stop stopColor="#FC3832" offset="100%" />
                        </linearGradient>
                        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="f">
                            <stop stopColor="#657DE9" offset="0%" />
                            <stop stopColor="#1C0FD7" offset="100%" />
                        </linearGradient>
                        <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                            id="a">
                            <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                            <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1" />
                        </filter>
                        <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                            id="d">
                            <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                            <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter1" />
                        </filter>
                        <path
                            d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z"
                            id="b" />
                        <path
                            d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z"
                            id="e" />
                    </defs>
                    <g fill="none" fillRule="evenodd" opacity=".9">
                        <g transform="rotate(65 416.452 409.167)">
                            <use fill="#000" filter="url(#a)"  />
                            <use fill="url(#c)"  />
                        </g>
                        <g transform="rotate(29 421.929 414.496)">
                            <use fill="#000" filter="url(#d)"  />
                            <use fill="url(#f)"  />
                        </g>
                    </g>
                </svg>
            </div>

            <div id="nav-mobile-btn"
                className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10">
                <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
                <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
            </div>

        </div>
    </header>
    <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
        <div
            className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
            <div
                className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
                <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">Bride gaps
                    in
                    Communication</h1>
                <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">Facilitate seamless communication between individuals who use sign language and those who use spoken language</p>
                <a onClick={()=> navigate('/app')}
                    className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0">Start
                    Today!</a>
                <div className="flex-col hidden mt-12 sm:flex lg:mt-24">
                    <p className="mb-4 text-sm font-medium tracking-widest text-gray-500 uppercase">Integrates With</p>
                    <div className="flex">
                         <img src="/zoom.png" alt="" width="100" height="100"></img>
                    </div>
                </div>
                <svg className="absolute left-0 max-w-md mt-24 -ml-64 left-svg" viewBox="0 0 423 423"
                    xmlns="http://www.w3.org/2000/svg" >
                    <defs>
                        <linearGradient x1="100%" y1="0%" x2="4.48%" y2="0%" id="linearGradient-1">
                            <stop stopColor="#5C54DB" offset="0%" />
                            <stop stopColor="#6A82E7" offset="100%" />
                        </linearGradient>
                        <filter x="-9.3%" y="-6.7%" width="118.7%" height="118.7%" filterUnits="objectBoundingBox"
                            id="filter-3">
                            <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                            <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" in="shadowBlurOuter1" />
                        </filter>
                        <rect id="path-2" x="63" y="504" width="300" height="300" rx="40" />
                    </defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity=".9">
                        <g id="Desktop-HD" transform="translate(-39 -531)">
                            <g id="Hero" transform="translate(43 83)">
                                <g id="Rectangle-6" transform="rotate(45 213 654)">
                                    <use fill="#000" filter="url(#filter-3)"  />
                                    <use fill="url(#linearGradient-1)"  />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
                <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
                    <img src="/snap.png"
                        className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12"></img>
                </div>
            </div>
        </div>
    </div>

    <div id="features" className="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
            <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Our Features</h2>
            <h3
                className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
                Integrate & Improvise accessibility.</h3>
            <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">

                <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
                    <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                        <svg className="absolute w-full h-full text-gray-100 fill-current" viewBox="0 0 377 340"
                            xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <g>
                                    <path
                                        d="M342.8 3.7c24.7 14 18.1 75 22.1 124s18.6 85.8 8.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5.9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z" />
                                </g>
                            </g>
                        </svg>
                        <img src="/3.png" width={100} height={100} style={{zIndex:100}}></img>
                        <h4 className="relative mt-6 text-lg font-bold">Plug & play</h4>
                        <p className="relative mt-2 text-base text-center text-gray-600">Integrate into applications with easy and ready to use.</p>
                    </div>
                </div>

                <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
                    <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                        <svg className="absolute w-full h-full text-gray-100 fill-current" viewBox="0 0 358 372"
                            xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <g>
                                    <path
                                        d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 102.5-1.1 40.6-15.7 75.2-24.3 114.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z" />
                                </g>
                            </g>
                        </svg>
                        <img src="/4.png" width={100} height={100} style={{zIndex:100}}></img>

                        <h4 className="relative mt-6 text-lg font-bold">Machine Learning</h4>
                        <p className="relative mt-2 text-base text-center text-gray-600">Making use of state of art Image recognition and NLP tools.</p>
                     
                    </div>
                </div>

                <div className="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3">
                    <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                        <svg className="absolute w-full h-full text-gray-100 fill-current" viewBox="0 0 378 410"
                            xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <g>
                                    <path
                                        d="M305.9 14.4c23.8 24.6 16.3 84.9 26.6 135.1 10.4 50.2 38.6 90.3 43.7 137.8 5.1 47.5-12.8 102.4-50.7 117.4-37.9 15.1-95.7-9.8-151.7-12.2-56.1-2.5-110.3 17.6-130-3.4-19.7-20.9-4.7-82.9-11.5-131.2C25.5 209.5-3 174.7 1.2 147c4.2-27.7 41-48.3 75-69.6C110.1 56.1 141 34.1 184 17.5c43.1-16.6 98.1-27.7 121.9-3.1z" />
                                </g>
                            </g>
                        </svg>
                        <img src="/5.png" width={100} height={100} style={{zIndex:100}}></img>

                        <h4 className="relative mt-6 text-lg font-bold">Conversational</h4>
                        <p className="relative mt-2 text-base text-center text-gray-600">converse seamlessly without any interruption</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    {/* <div className="relative px-8 py-10 bg-white border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">

        <div id="pricing" className="container flex flex-col items-center h-full max-w-6xl mx-auto">
            <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Our Pricing</h2>
            <h3
                className="w-full max-w-2xl px-5 px-8 mt-2 text-2xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0">
                Simple, Transparent Pricing for Everyone</h3>

            <div className="max-w-full mx-auto md:max-w-6xl sm:px-8">
                <div className="relative flex flex-col items-center block sm:flex-row">
                    <div
                        className="relative z-0 w-11/12 max-w-sm my-8 border border-gray-200 rounded-lg sm:w-3/5 lg:w-1/3 sm:my-5 md:-mr-4">
                        <div className="overflow-hidden text-black bg-white border-t border-gray-100 rounded-lg shadow-sm">
                            <div
                                className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6">
                                <h3 className="p-3 text-lg font-bold tracking-wide text-center uppercase">Basic<span
                                        className="ml-2 font-light">Plan</span></h3>
                                <h4
                                    className="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900">
                                    <span className="mr-1 -ml-2 text-lg text-gray-700">$</span>48</h4>
                                <p className="text-sm text-gray-600">In our basic plan you can take advantage of all these
                                    features below.
                                </p>
                            </div>

                            <div className="flex flex-wrap px-6 mt-8">
                                <ul>
                                    <li className="flex items-center">
                                        <div className="p-2 text-green-500 rounded-full fill-current ">
                                            <svg className="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-lg text-gray-700">Awesome Feature</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="p-2 text-green-500 rounded-full fill-current ">
                                            <svg className="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-lg text-gray-700">And Another Cool Feature</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="p-2 text-green-500 rounded-full fill-current ">
                                            <svg className="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-lg text-gray-700">One More Feature</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center block p-8 uppercase">
                                <a href="#_"
                                    className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:bg-green-600">Select
                                    This Plan</a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative z-10 w-full max-w-md my-8 bg-white rounded-lg shadow-lg sm:w-2/3 lg:w-1/3 sm:my-5">
                        <div
                            className="py-4 text-sm font-semibold leading-none tracking-wide text-center text-white uppercase bg-indigo-500 rounded-t">
                            Most Popular</div>
                        <div className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6">
                            <h3 className="p-3 pb-1 text-lg font-bold tracking-wide text-center uppercase">Pro<span
                                    className="ml-2 font-light">Plan</span></h3>
                            <h4
                                className="flex items-center justify-center pb-6 text-5xl font-bold text-center text-gray-900">
                                <span className="mr-1 -ml-2 text-lg text-gray-700">$</span>98</h4>
                            <p className="text-sm text-gray-600">Our most popular package is the Pro Plan which gives you
                                access to the
                                following:</p>
                        </div>
                        <div className="flex justify-start pl-12 mt-8 sm:justify-start">
                            <ul>
                                <li className="flex items-center">
                                    <div className="p-2 text-green-500 rounded-full fill-current">
                                        <svg className="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span className="ml-3 text-lg text-gray-700">Really Cool Features</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="p-2 text-green-500 rounded-full fill-current ">
                                        <svg className="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span className="ml-3 text-lg text-gray-700">Another Cool Feature</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="p-2 text-green-500 rounded-full fill-current ">
                                        <svg className="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <span className="ml-3 text-lg text-gray-700">And One More</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center block p-8 uppercase">
                            <a href="#_"
                                className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:bg-indigo-600">Select
                                This Plan</a>
                        </div>
                    </div>
                    <div
                        className="relative z-0 w-11/12 max-w-sm my-8 rounded-lg shadow-lg sm:w-3/5 lg:w-1/3 sm:my-5 md:-ml-4">
                        <div className="overflow-hidden text-black bg-white rounded-lg shadow-lg shadow-inner">
                            <div
                                className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-8">
                                <h3 className="p-3 pb-1 text-lg font-bold tracking-wide text-center uppercase">Premium<span
                                        className="ml-2 font-light">Plan</span></h3>
                                <h4
                                    className="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900">
                                    <span className="mr-1 -ml-2 text-lg text-gray-700">$</span>78</h4>
                                <p className="pl-2 text-sm text-gray-600">With our premium plan you can take advantage of
                                    all the following
                                    features:</p>
                            </div>
                            <div className="flex flex-wrap px-8 mt-8">
                                <ul>
                                    <li className="flex items-center">
                                        <div className="p-2 text-green-500 rounded-full fill-current ">
                                            <svg className="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-lg text-gray-700">Totally Tubular Feature</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="p-2 text-green-500 rounded-full fill-current ">
                                            <svg className="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-lg text-gray-700">Super Cool Feature</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="p-2 text-green-500 rounded-full fill-current ">
                                            <svg className="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        </div>
                                        <span className="ml-3 text-lg text-gray-700">And One More</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-center block p-8 uppercase">
                                <a href="#_"
                                    className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:bg-green-600">Select
                                    This Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div> */}
    <div id="testimonials"
        className="flex items-center justify-center w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
        <div className="max-w-6xl mx-auto">
            <div className="flex-col items-center ">
                <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
                    <p className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Our customers love
                        our product
                    </p>
                    <h2
                        className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                        Testimonials</h2>
                    <p className="my-6 text-xl font-medium text-gray-500">Don't just take our word for it, read from our
                        extensive
                        list of case studies and customer testimonials.</p>

                </div>
                <div className="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
                    <div className="w-full xl:w-1/2 xl:pr-8">
                        <blockquote
                            className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                            <div className="flex flex-col pr-8">
                                <div className="relative pl-12">
                                    <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                        <path
                                            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                                    </svg>
                                    <p className="mt-2 text-base text-gray-600">I'm loving these templates! Very nice
                                        features and layouts.
                                    </p>
                                </div>

                                <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">Sandra
                                    Walton <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO
                                        SomeCompany</span></h3>
                                <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                            </div>
                            <img className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                                src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80"
                                alt=""></img>
                        </blockquote>
                        <blockquote
                            className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 mb-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease xl:mb-0">
                            <div className="flex flex-col pr-10">
                                <div className="relative pl-12">
                                    <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                        <path
                                            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                                    </svg>
                                    <p className="mt-2 text-base text-gray-600">Really digging this service. Now I can
                                        quickly bootstrap any
                                        project.</p>
                                </div>
                                <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">Kenny
                                    Jones <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO
                                        SomeCompany</span></h3>
                                <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                            </div>
                            <img className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                                src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                                alt=""></img>
                        </blockquote>
                    </div>
                    <div className="w-full xl:w-1/2 xl:pl-8">
                        <blockquote
                            className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                            <div className="flex flex-col pr-10">
                                <div className="relative pl-12">
                                    <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                        <path
                                            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                                    </svg>
                                    <p className="mt-2 text-base text-gray-600">Extremely helpful in every single project we
                                        have released.
                                    </p>
                                </div>

                                <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">Mike Smith
                                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                                </h3>
                                <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                            </div>
                            <img className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
                                alt=""></img>
                        </blockquote>
                        <blockquote
                            className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                            <div className="flex flex-col pr-10">
                                <div className="relative pl-12">
                                    <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                        <path
                                            d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                                    </svg>
                                    <p className="mt-2 text-base text-gray-600">Finally a quick and easy system I can use
                                        for any type of
                                        project.</p>
                                </div>

                                <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">Molly
                                    Sanchez <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO
                                        SomeCompany</span></h3>
                                <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                            </div>
                            <img className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
                                alt=""></img>
                        </blockquote>
                    </div>
                </div>


            </div>
        </div>
    </div>


    <footer className="px-4 pt-12 pb-8 text-white bg-white border-t border-gray-200">
        <div className="pt-4 pt-6 mt-10 text-center text-gray-500 border-t border-gray-100">© 2024 VaaniISL. All rights
            reserved.</div>
    </footer>

    {/* <script>
        if (document.getElementById('nav-mobile-btn')) {
            document.getElementById('nav-mobile-btn').addEventListener('click', function () {
                if (this.classNameList.contains('close')) {
                    document.getElementById('nav').classNameList.add('hidden');
                    this.classNameList.remove('close');
                } else {
                    document.getElementById('nav').classNameList.remove('hidden');
                    this.classNameList.add('close');
                }
            });
        }
    </script> */}
</div>  )
}
