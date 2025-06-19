// import React from 'react'
// import { BiWater } from "react-icons/bi";
// import { Link } from 'react-router-dom';
// import Background from '../Background/Background';
// import myDumble from '../Image/Dumble.png'
// import FirstDay from '../Image/First-Day.jpeg'
// import Trainer_First from '../Image/Trainer-1.png'
// import Trainer_Second from '../Image/Trainer-2.jpg'
// import Trainer_Third from '../Image/Trainer-3.webp'
// import { FaFacebookF } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa";
// import { useEffect, useState } from 'react';

// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


// const center = {
//     lat: 37.7749,
//     lng: -122.4194,
// };

// function Classes() {

//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const onScroll = () => {
//             if (window.scrollY > '') {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', onScroll);
//         return () => window.removeEventListener('scroll', onScroll);
//     }, []);

//     return (
//         <>
//             {/* Nav */}
//             <Background /> {/* Background Video */}
//             <div
//                 className={`w-[100vw] shadow-2xl sticky top-0 z-50 px-5 sm:px-10 md:px-20 py-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
//                     }`}
//             >
//                 <div className="flex items-center justify-between">
//                     {/* Logo */}
//                     <div className={`text-3xl sm:text-4xl font-bold ${scrolled ? 'text-black' : 'text-white'
//                         }`}>
//                         TRAINING<span className="text-orange-600 ml-1">STUDIO</span>
//                     </div>

//                     {/* Desktop Menu */}
//                     <ul className="hidden md:flex items-center gap-8">
//                         <li className="list-none text-orange-600 font-semibold hover:text-orange-600">
//                             <Link to="/">HOME</Link>
//                         </li>
//                         <li className={`list-none font-semibold hover:text-orange-600 ${scrolled ? 'text-black' : 'text-white'
//                             }`}>
//                             <Link to="/Nav/About">ABOUT</Link>
//                         </li>
//                         <li className={`list-none font-semibold hover:text-orange-600 ${scrolled ? 'text-black' : 'text-white'
//                             }`}>
//                             <Link to="/Nav/Classes">CLASSES</Link>
//                         </li>
//                         <li className={`list-none font-semibold hover:text-orange-600 ${scrolled ? 'text-black' : 'text-white'
//                             }`}>
//                             <Link to="/Nav/Schedule">SCHEDULES</Link>
//                         </li>
//                         <li className={`list-none font-semibold hover:text-orange-600 ${scrolled ? 'text-black' : 'text-white'
//                             }`}>
//                             <Link to="/Nav/Contact">CONTACT</Link>
//                         </li>
//                         <li className="bg-orange-600 text-white px-4 py-2 rounded font-semibold hover:text-orange-700">
//                             SIGN UP
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Mobile Menu */}
//                 <ul className="md:hidden mt-4 flex flex-col gap-4">
//                     <li className={`list-none font-semibold hover:text-orange-600 ${scrolled ? 'text-black' : 'text-white'
//                         }`}>
//                         <Link to="/">HOME</Link>
//                     </li>
//                     <li className={`list-none font-semibold hover:text-orange-600 ${scrolled ? 'text-black' : 'text-white'
//                         }`}>
//                         <Link to="/Nav/About">ABOUT</Link>
//                     </li>
//                     <li className={`list-none font-semibold hover:text-orange-600 ${scrolled ? 'text-black' : 'text-white'
//                         }`}>
//                         <Link to="/Nav/Classes">CLASSES</Link>
//                     </li>
//                     <li className={`list-none font-semibold hover:text-orange-600 ${scrolled ? 'text-black' : 'text-white'
//                         }`}>
//                         <Link to="/Nav/Schedule">SCHEDULES</Link>
//                     </li>
//                     <li className={`list-none font-semibold hover:text-orange-600 ${scrolled ? 'text-black' : 'text-white'
//                         }`}>
//                         <Link to="/Nav/Contact">CONTACT</Link>
//                     </li>
//                     <li className="bg-orange-600 text-white px-4 py-2 rounded font-semibold hover:text-orange-700">
//                         SIGN UP
//                     </li>
//                 </ul>
//             </div>


//             {/* HeroSection */}
//             <div className="flex flex-col justify-center items-center text-center bg-transparent gap-y-10 px-4 py-16 sm:py-24 md:py-32">
//                 {/* Subheading */}
//                 <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white mt-10 sm:mt-16">
//                     WORK HARDER, GET STRONGER
//                 </p>

//                 {/* Main Heading */}
//                 <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight">
//                     EASY WITH OUR <span className="text-orange-600">GYM</span>
//                 </h1>

//                 {/* Button */}
//                 <button className="mt-6 sm:mt-10 px-6 py-3 bg-orange-600 text-white text-base sm:text-lg font-semibold rounded hover:text-gray-100 hover:bg-orange-700 transition duration-300 ease-in-out">
//                     BECOME A MEMBER
//                 </button>
//             </div>



//             {/* Program Section */}
//             <div className="flex flex-col items-center text-center bg-white px-4 py-10 gap-y-6 w-full">
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
//                     Choose <span className="text-orange-600">Program</span>
//                 </h1>
//                 <ul className="text-4xl text-orange-600">
//                     <BiWater />
//                 </ul>
//                 <p className="text-base sm:text-lg text-gray-500 max-w-3xl">
//                     "Select the perfect fitness program tailored to your goals. From strength to flexibility—start your transformation today!"
//                 </p>
//             </div>


//             {/* Program Cards Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-10 md:px-20 lg:px-32 py-10 bg-white w-full">
//                 {/* Card 1 */}
//                 <div className="flex gap-4">
//                     <img
//                         src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
//                         alt=""
//                         className="h-24 w-24 object-cover rounded-md"
//                     />
//                     <div>
//                         <h2 className="text-xl font-bold">Basic Fitness</h2>
//                         <p className="text-gray-500 text-sm">
//                             "Basic fitness focuses on simple exercises and healthy habits to improve strength, flexibility, and overall well-being."
//                         </p>
//                         <button className="text-orange-600 font-semibold mt-2 hover:underline">
//                             Discover More
//                         </button>
//                     </div>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="flex gap-4">
//                     <img
//                         src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
//                         alt=""
//                         className="h-24 w-24 object-cover rounded-md"
//                     />
//                     <div>
//                         <h2 className="text-xl font-bold">Advanced Muscle Course</h2>
//                         <p className="text-gray-500 text-sm">
//                             "Advanced Muscle Course helps you build <span className='text-blue-500'>strength, size</span>, and <span className='text-blue-500'>definition</span> with expert techniques."
//                         </p>
//                         <button className="text-orange-600 font-semibold mt-2 hover:underline">
//                             Discover More
//                         </button>
//                     </div>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="flex gap-4">
//                     <img
//                         src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
//                         alt=""
//                         className="h-24 w-24 object-cover rounded-md"
//                     />
//                     <div>
//                         <h2 className="text-xl font-bold">New Gym Training</h2>
//                         <p className="text-gray-500 text-sm">
//                             "New Gym Training guides beginners with effective workouts, proper form, and tips to build strength."
//                         </p>
//                         <button className="text-orange-600 font-semibold mt-2 hover:underline">
//                             Discover More
//                         </button>
//                     </div>
//                 </div>

//                 {/* Card 4 */}
//                 <div className="flex gap-4">
//                     <img
//                         src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
//                         alt=""
//                         className="h-24 w-24 object-cover rounded-md"
//                     />
//                     <div>
//                         <h2 className="text-xl font-bold">Yoga Training</h2>
//                         <p className="text-gray-500 text-sm">
//                             "Yoga Training improves flexibility, balance, and mental clarity through poses, breath control, and relaxation."
//                         </p>
//                         <button className="text-orange-600 font-semibold mt-2 hover:underline">
//                             Discover More
//                         </button>
//                     </div>
//                 </div>

//                 {/* Card 5 */}
//                 <div className="flex gap-4">
//                     <img
//                         src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
//                         alt=""
//                         className="h-24 w-24 object-cover rounded-md"
//                     />
//                     <div>
//                         <h2 className="text-xl font-bold">Basic Muscle Course</h2>
//                         <p className="text-gray-500 text-sm">
//                             "Build strength and tone with beginner-friendly workouts and easy muscle-building tips."
//                         </p>
//                         <button className="text-orange-600 font-semibold mt-2 hover:underline">
//                             Discover More
//                         </button>
//                     </div>
//                 </div>

//                 {/* Card 6 */}
//                 <div className="flex gap-4">
//                     <img
//                         src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
//                         alt=""
//                         className="h-24 w-24 object-cover rounded-md"
//                     />
//                     <div>
//                         <h2 className="text-xl font-bold">Body Building Course</h2>
//                         <p className="text-gray-500 text-sm">
//                             "Gain muscle, boost strength, and sculpt your body with expert bodybuilding workouts."
//                         </p>
//                         <button className="text-orange-600 font-semibold mt-2 hover:underline">
//                             Discover More
//                         </button>
//                     </div>
//                 </div>
//             </div>




//             {/* Quote */}
//             <div
//                 id="Dumble"
//                 className="relative w-full min-h-[50vh] text-white flex flex-col justify-center items-center text-center gap-y-6 px-4 sm:px-6 md:px-10 py-20 overflow-hidden"
//             >
//                 {/* Background Layer */}
//                 <div className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat opacity-90" style={{ backgroundImage: "url('./Image/Background-1.jpg')" }}></div>

//                 {/* Overlay Layer */}
//                 <div className="absolute inset-0 z-[-1] bg-black/60"></div>

//                 {/* Content */}
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//                     DON<span className="text-orange-600">'T</span> THINK, BEGIN <span className="text-orange-600">TODAY</span>!
//                 </h1>

//                 <p className="text-base sm:text-lg md:text-xl font-medium max-w-4xl text-center px-2">
//                     "Don't let doubt hold you back. Stop overthinking and start taking action now. Every great journey begins with a single step—begin today and watch your dreams unfold!"
//                 </p>

//                 <button className="mt-4 px-6 py-3 bg-orange-600 text-white text-sm sm:text-base font-semibold rounded hover:bg-orange-700 transition-all duration-300">
//                     BECOME A MEMBER
//                 </button>
//             </div>


//             {/* Classes Header */}
//             <div className="flex flex-col items-center text-center w-full bg-white px-4 py-12 gap-y-4">
//                 <h1 className="text-3xl sm:text-4xl font-bold text-black">
//                     Choose <span className="text-orange-600">Classes</span>
//                 </h1>
//                 <ul className="text-4xl text-orange-600">
//                     <BiWater />
//                 </ul>
//                 <p className="text-base sm:text-lg text-gray-500 max-w-2xl">
//                     "Explore a variety of classes designed for all fitness levels. Find what inspires you and start your fitness journey today!"
//                 </p>
//             </div>

//             {/* Classes Section */}
//             <div className="flex flex-col lg:flex-row items-center justify-center w-full bg-white px-4 sm:px-10 py-10 gap-10">

//                 {/* Left Side Cards */}
//                 <div className="flex flex-col gap-6 w-full lg:w-1/2">
//                     {/* Card 1 */}
//                     <div className="flex items-center gap-6 p-5 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer rounded-lg">
//                         <img src={myDumble} alt="" className="h-10 w-10" />
//                         <h1 className="text-xl sm:text-2xl font-bold text-orange-600">
//                             <Link to="/class/first?id=1">First Training Class</Link>
//                         </h1>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="flex items-center gap-6 p-5 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer rounded-lg">
//                         <img src={myDumble} alt="" className="h-10 w-10" />
//                         <h1 className="text-xl sm:text-2xl font-bold">
//                             <Link to="/class/Second?id=2">Second Training Class</Link>
//                         </h1>
//                     </div>

//                     {/* Card 3 */}
//                     <div className="flex items-center gap-6 p-5 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer rounded-lg">
//                         <img src={myDumble} alt="" className="h-10 w-10" />
//                         <h1 className="text-xl sm:text-2xl font-bold">
//                             <Link to="/class/Third?id=3">Third Training Class</Link>
//                         </h1>
//                     </div>

//                     {/* Card 4 */}
//                     <div className="flex items-center gap-6 p-5 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer rounded-lg">
//                         <img src={myDumble} alt="" className="h-10 w-10" />
//                         <h1 className="text-xl sm:text-2xl font-bold">
//                             <Link to="/class/Fourth?id=4">Fourth Training Class</Link>
//                         </h1>
//                     </div>
                    
//                 </div>

//                 {/* Right Side Image + Info */}
//                 <div className="w-full lg:w-1/2 flex flex-col items-center text-center gap-y-4 mt-6 lg:mt-20 px-2">
//                     <img src={FirstDay} alt="Workout" className="w-full max-w-md h-60 sm:h-72 object-cover rounded" />

//                     <h1 className="text-xl sm:text-2xl font-bold">First Training Class</h1>

//                     <p className="text-sm sm:text-base text-gray-500 max-w-xl">
//                         "Join our First Training Class to start your fitness journey! Learn proper techniques, build strength, improve flexibility, and gain confidence. Our expert trainers will guide you every step of the way. Take the first step toward a healthier you!"
//                     </p>

//                     <button className="px-5 py-2 mt-2 bg-orange-600 text-white hover:bg-orange-700 transition-all rounded">
//                         VIEW SCHEDULE
//                     </button>
//                 </div>
//             </div>


//             {/* Schedule */}

//             <div id="Schedule" className="relative w-full text-white">

//                 {/* Overlay Layer */}
//                 <div className="absolute inset-0 bg-black/60 z-[-1]"></div>

//                 {/* Background Image */}
//                 <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-[-2]"
//                     style={{ backgroundImage: "url('./Image/Background-2.jpg')" }}></div>

//                 {/* Inner Content */}
//                 <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 py-12 sm:py-20 px-4 sm:px-6">

//                     {/* Header */}
//                     <h1 className="text-3xl sm:text-4xl font-bold">
//                         Classes <span className="text-orange-600">Schedule</span>
//                     </h1>
//                     <div className="text-4xl text-orange-600"><BiWater /></div>
//                     <p className="text-sm sm:text-lg font-semibold max-w-2xl">
//                         "Explore a variety of classes designed for all fitness levels. Find what inspires you and start your fitness journey today!"
//                     </p>

//                     {/* Day Tabs */}
//                     <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 font-semibold text-sm sm:text-base">
//                         <li className="hover:text-orange-600 cursor-pointer transition-all duration-300"><Link to="/Schedule/Mon">Monday</Link></li>/
//                         <li className="hover:text-orange-600 cursor-pointer transition-all duration-300"><Link to="/Schedule/Tue">Tuesday</Link></li>/
//                         <li className="hover:text-orange-600 cursor-pointer transition-all duration-300"><Link to="/Schedule/Wed">Wednesday</Link></li>/
//                         <li className="hover:text-orange-600 cursor-pointer transition-all duration-300"><Link to="/Schedule/Thu">Thursday</Link></li>/
//                         <li className="hover:text-orange-600 cursor-pointer transition-all duration-300"><Link to="/Schedule/Fri">Friday</Link></li>
//                     </ul>

//                     {/* Grid */}
//                     <div className="overflow-x-auto w-full">
//                         <div className="grid grid-cols-2 sm:grid-cols-4 text-sm text-center border-2 border-white w-[90%] min-w-[600px] mx-auto">

//                             {/* Row 1 */}
//                             <div className="border border-white py-6 font-semibold">Fitness Class</div>
//                             <div className="border border-white py-6">10:00AM - 11:30AM</div>
//                             <div className="border border-white py-6"></div>
//                             <div className="border border-white py-6">William G. Stewart</div>

//                             {/* Row 2 */}
//                             <div className="border border-white py-6 font-semibold">Muscle Training</div>
//                             <div className="border border-white py-6"></div>
//                             <div className="border border-white py-6"></div>
//                             <div className="border border-white py-6">Paul D. Newman</div>

//                             {/* Row 3 */}
//                             <div className="border border-white py-6 font-semibold">Body Building</div>
//                             <div className="border border-white py-6"></div>
//                             <div className="border border-white py-6">2:00PM - 3:30PM</div>
//                             <div className="border border-white py-6">Boyd C. Harris</div>

//                             {/* Row 4 */}
//                             <div className="border border-white py-6 font-semibold">Yoga Training Class</div>
//                             <div className="border border-white py-6"></div>
//                             <div className="border border-white py-6"></div>
//                             <div className="border border-white py-6">Hector T. Daigle</div>

//                             {/* Row 5 */}
//                             <div className="border border-white py-6 font-semibold">Advanced Training</div>
//                             <div className="border border-white py-6"></div>
//                             <div className="border border-white py-6"></div>
//                             <div className="border border-white py-6">Bret D. Bowers</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>





//             {/* Trainers Section */}
//             <div className="bg-white w-full ">

//                 {/* Header */}
//                 <div className="flex flex-col items-center text-center gap-4 pt-14">
//                     <h1 className="text-3xl sm:text-4xl font-bold text-black">
//                         Expert <span className="text-orange-600">Trainers</span>
//                     </h1>
//                     <div className="text-4xl text-orange-600"><BiWater /></div>
//                     <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
//                         "Expert trainers do more than teach — they inspire, empower, and elevate..."
//                     </p>
//                 </div>

//                 {/* Trainers Grid */}
//                 <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">

//                     {/* Trainer 1 */}
//                     <div className="w-full max-w-sm rounded-lg p-4 shadow-2xl bg-white">
//                         <img src={Trainer_First} alt="" className="h-60 w-60 rounded-md mx-auto" />
//                         <h5 className="text-sm text-orange-600 mt-4 text-center">Strength Trainer</h5>
//                         <h1 className="text-xl font-semibold text-center capitalize">sangram chougule</h1>
//                         <p className="text-sm text-gray-600 mt-2 text-justify">
//                             Sangram Chougule (b. 1979) is a six-time Mr. India, Mr. Universe & gym founder...
//                         </p>
//                         <ul className="flex justify-center gap-4 mt-4 text-lg text-gray-800">
//                             <a href="https://www.facebook.com/share/15giTSmCFd/" className="hover:text-orange-600 transition"><FaFacebookF /></a>
//                             <a href="https://www.instagram.com/sangram_chougule_official" className="hover:text-orange-600 transition"><FaSquareInstagram /></a>
//                             <a href="https://www.youtube.com/@sangramchouguleofficial" className="hover:text-orange-600 transition"><FaYoutube /></a>
//                         </ul>
//                     </div>

//                     {/* Trainer 2 */}
//                     <div className="w-full max-w-sm rounded-lg p-4 shadow-2xl bg-white">
//                         <img src={Trainer_Second} alt="" className="h-60 w-60 rounded-md mx-auto" />
//                         <h5 className="text-sm text-orange-600 mt-4 text-center">Muscle Trainer</h5>
//                         <h1 className="text-xl font-semibold text-center capitalize">ronnie coleman</h1>
//                         <p className="text-sm text-gray-600 mt-2 text-justify">
//                             Ronnie Coleman (b.1964) is an 8-time Mr. Olympia, known for his massive strength...
//                         </p>
//                         <ul className="flex justify-center gap-4 mt-4 text-lg text-gray-800">
//                             <a href="https://www.facebook.com/share/1CC473YJbz/" className="hover:text-orange-600 transition"><FaFacebookF /></a>
//                             <a href="https://www.instagram.com/ronniecoleman8" className="hover:text-orange-600 transition"><FaSquareInstagram /></a>
//                             <a href="https://www.youtube.com/@RonnieColeman8" className="hover:text-orange-600 transition"><FaYoutube /></a>
//                         </ul>
//                     </div>

//                     {/* Trainer 3 */}
//                     <div className="w-full max-w-sm rounded-lg p-4 shadow-2xl bg-white">
//                         <img src={Trainer_Third} alt="" className="h-60 w-60 rounded-md mx-auto" />
//                         <h5 className="text-sm text-orange-600 mt-4 text-center">Power Trainer</h5>
//                         <h1 className="text-xl font-semibold text-center capitalize">nitin chandila</h1>
//                         <p className="text-sm text-gray-600 mt-2 text-justify">
//                             Nitin Chandila (b.1997) is an Indian pro bodybuilder, Mr India, and social media star...
//                         </p>
//                         <ul className="flex justify-center gap-4 mt-4 text-lg text-gray-800">
//                             <a href="https://www.facebook.com/share/16gce2Px5R/" className="hover:text-orange-600 transition"><FaFacebookF /></a>
//                             <a href="https://www.instagram.com/nitinchandila" className="hover:text-orange-600 transition"><FaSquareInstagram /></a>
//                             <a href="https://www.youtube.com/@nitinchandilaofficial" className="hover:text-orange-600 transition"><FaYoutube /></a>
//                         </ul>
//                     </div>
//                 </div>
//             </div>




//             {/* Contact  */}

//             <div className="flex flex-col lg:flex-row w-full min-h-screen">

//                 {/* Left - Google Map */}
//                 <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
//                     <LoadScript googleMapsApiKey="AIzaSyBpgZ65NiewGg7Tqr7uz3DknfOx9Vdpls8">
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={center}
//                             zoom={12}
//                         >
//                             <Marker position={center} />
//                         </GoogleMap>
//                     </LoadScript>
//                 </div>

//                 {/* Right - Contact Form */}
//                 <div className="w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center py-10 px-4" id="bgDumbull">
//                     <div className="bg-white rounded-lg w-full max-w-lg p-6 sm:p-8 flex flex-col gap-4">

//                         <input
//                             type="text"
//                             placeholder="Your Name*"
//                             className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-600"
//                         />

//                         <input
//                             type="email"
//                             placeholder="Your Email*"
//                             className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-600"
//                         />

//                         <input
//                             type="text"
//                             placeholder="Subject"
//                             className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-600"
//                         />

//                         <textarea
//                             placeholder="Message"
//                             rows="4"
//                             className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-600"
//                         ></textarea>

//                         <button className="bg-orange-600 text-white rounded-md py-2 w-full sm:w-1/2 hover:bg-orange-700 transition">
//                             BECOME A MEMBER
//                         </button>
//                     </div>
//                 </div>

//             </div>


//         </>
//     )
// }

// export default Classes