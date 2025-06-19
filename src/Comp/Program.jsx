import React from 'react'
import { BiWater } from "react-icons/bi";

function Program() {
    return (
        <>

            <div className='flex flex-col justify-center text-center w-[650px] items-center mx-auto p-6  rounded-lg  gap-y-6'>
                <h1 className=' text-3xl font-bold text-black'>Choose <span className=' text-orange-600'>Program</span> </h1>
                <ul className=' text-4xl text-orange-600'><BiWater /></ul>
                <p className=' text-lg text-gray-500'>"Select the perfect fitness program tailored to your goals. From strength to flexibility—start your transformation today!"</p>
            </div>

            {/* Program Cards */}
            <div className='grid grid-cols-2 px-32 gap-10 mb-10'>

                {/* Card 1 */}
                <div className='flex gap-5'>
                    <div>
                        <img
                            src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                            alt=""
                            className=' h-24 w-44 object-cover rounded-md'
                        />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Basic Fitness</h1>
                        <p className='text-lg text-gray-400'>"Basic fitness focuses on simple exercises and healthy habits to improve strength, flexibility, and overall well-being."</p>
                        <button className='text-orange-600 font-semibold cursor-pointer'>Discover More</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='flex gap-5'>
                    <div>
                        <img
                            src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                            alt=""
                            className=' h-24 w-40 object-cover rounded-md'
                        />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Advanced Muscle Course</h1>
                        <p className='text-lg text-gray-400'>"Advanced Muscle Course helps you build <span className='text-blue-500'>strength, size,</span> and <span className='text-blue-500'>definition</span> with expert techniques."</p>
                        <button className='text-orange-600 font-semibold cursor-pointer'>Discover More</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='flex gap-5'>
                    <div>
                        <img
                            src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                            alt=""
                            className=' h-24 w-40 object-cover rounded-md'
                        />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>New Gym Training</h1>
                        <p className='text-lg text-gray-400'>"New Gym Training guides beginners with effective workouts, proper form, and tips to build strength."</p>
                        <button className='text-orange-600 font-semibold cursor-pointer'>Discover More</button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='flex gap-5'>
                    <div>
                        <img
                            src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                            alt=""
                            className=' h-24 w-48 object-cover rounded-md'
                        />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Yoga Training</h1>
                        <p className='text-lg text-gray-400'>"Yoga Training improves flexibility, balance, and mental clarity through poses, breath control, and relaxation."</p>
                        <button className='text-orange-600 font-semibold cursor-pointer'>Discover More</button>
                    </div>
                </div>

                {/* Card 5 */}
                <div className='flex gap-5'>
                    <div>
                        <img
                            src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                            alt=""
                            className=' h-24 w-36 object-cover rounded-md'
                        />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Basic Muscle Course</h1>
                        <p className='text-lg text-gray-400'>"Build strength and tone with beginner-friendly workouts and easy muscle-building tips."</p>
                        <button className='text-orange-600 font-semibold cursor-pointer'>Discover More</button>
                    </div>
                </div>

                {/* Card 6 */}
                <div className='flex gap-5'>
                    <div>
                        <img
                            src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                            alt=""
                            className=' h-24 w-40 object-cover rounded-md'
                        />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Body Building Course</h1>
                        <p className='text-lg text-gray-400'>"Gain muscle, boost strength, and sculpt your body with expert bodybuilding workouts."</p>
                        <button className='text-orange-600 font-semibold cursor-pointer'>Discover More</button>
                    </div>
                </div>

            </div>


            {/* Quote */}
            <div id='Dumble' className=' mb-10 text-white flex flex-col justify-center items-center gap-y-10 '>

                <h1 className=' text-5xl font-bold mt-20'>
                    DON`T <span className=' text-orange-600'>THINK</span> , BEGIN <span className=' text-orange-600'>TODAY</span> !
                </h1>

                <p className=' text-xl font-semibold w-[900px] text-center'>
                    "Don't let doubt hold you back. Stop overthinking and start taking action now. Every great journey begins with a single step—begin today and watch your dreams unfold!"
                </p>

                <button className=' px-3.5 py-2 bg-orange-600 text-white hover:text-gray-200 cursor-pointer mb-32'>BECOME A MEMBER</button>
            </div>


        </>
    )
}

export default Program