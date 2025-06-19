import React from 'react'


function Herosection() {
    return (
        <>
            <div className=' flex flex-col justify-center items-center text-center bg-gray-200 gap-y-16'>
                <p className=' text-2xl font-bold text-white mt-32'>WORK HARDER, GET STRONGER</p>
                <h1 className=' text-white text-8xl font-bold'>EASY WITH OUR <span className=' text-orange-600'>GYM</span> </h1>
                <button className=' px-3.5 py-2 bg-orange-600 text-white hover:text-gray-200 cursor-pointer mb-32'>BECOME A MEMBER</button>
            </div>
        </>
    )
}

export default Herosection