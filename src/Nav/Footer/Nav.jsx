import React from 'react'

function Nav() {
    return (
        <>
            <div className=' flex px-20 items-center justify-between h-20 bg-gray-300'>
                <div className=' text-4xl font-bold'>
                    <h1 className=''>TRAINING<span className=' text-orange-600 ml-0.5'>STUDIO</span></h1>
                </div>

                <div>
                    <ul className=' flex gap-10 items-center'>
                        <li className="text-white font-semibold hover:text-orange-600 cursor-pointer transition-all duration-300 ease-in-out ">
                            HOME
                        </li>

                        <li className="text-white font-semibold hover:text-orange-600 cursor-pointer transition-all duration-300 ease-in-out ">ABOUT</li>
                        <li className="text-white font-semibold hover:text-orange-600 cursor-pointer transition-all duration-300 ease-in-out ">CLASSES</li>
                        <li className="text-white font-semibold hover:text-orange-600 cursor-pointer transition-all duration-300 ease-in-out ">SCHEDULES</li>
                        <li className="text-white font-semibold hover:text-orange-600 cursor-pointer transition-all duration-300 ease-in-out ">CONTACT</li>
                        <li className=' bg-orange-600 font-semibold text-white px-2.5 py-1.5 cursor-pointer hover:text-orange-700 transition-all duration-300 ease-in-out'>SIGN UP</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Nav