import React from 'react';
import { Link } from 'react-router-dom';

import { BiWater } from "react-icons/bi";
import Background from '../Background/Background';
import myDumble from '../Image/Dumble.png'
import FirstDay from '../Image/First-Day.jpeg'
import Trainer_First from '../Image/Trainer-1.png'
import Trainer_Second from '../Image/Trainer-2.jpg'
import Trainer_Third from '../Image/Trainer-3.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const center = {
    lat: 37.7749,
    lng: -122.4194,
};

function Schedule() {

    // For Nav buttons
    const [activeLink, setActiveLink] = useState("HOME");

    const [photo, setPhoto] = useState(FirstDay)
    const [active, setActive] = useState(null);
    const [text, setText] = useState("Join our First Training Class to start your fitness journey! Learn proper techniques, build strength, improve flexibility, and gain confidence. Our expert trainers will guide you every step of the way. Take the first step toward a healthier you!")
    const [heading, setHeading] = useState("First Training Day")

    const HandleClick = () => {
        setPhoto(FirstDay)
        setActive(1)
        setHeading("First Training Day")

    }

    const HandleClick2 = () => {
        setPhoto(SecondDay)
        setActive(2)
        setText(Text2)
        setHeading("Secong Training Day")
    }
    const HandleClick3 = () => {
        setPhoto(ThirdDay)
        setActive(3)
        setText(Text3)
        setHeading("Third Training Day")

    }
    const HandleClick4 = () => {
        setPhoto(FourthDay)
        setActive(4)
        setText(Text4)
        setHeading("Fourth Training Day")

    }


    // Scroll Effect
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > '') {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    // For Schedule
    const [activeDay, setActiveDay] = useState("Monday");

    const scheduleData = {
        Monday: [
            { class: "Fitness Class", time1: "10:00AM - 11:30AM", time2: "", trainer: "William G. Stewart" },
            { class: "Muscle Training", time1: "", time2: "", trainer: "Paul D. Newman" },
            { class: "Body Building", time1: "", time2: "2:00PM - 3:30PM", trainer: "Boyd C. Harris" },
            { class: "Yoga Training Class", time1: "", time2: "", trainer: "Hector T. Daigle" },
            { class: "Advanced Training", time1: "", time2: "", trainer: "Bret D. Bowers" },
        ],
        Tuesday: [
            { class: "Fitness Class", time1: "", time2: "2:00PM - 3:30PM", trainer: "William G. Stewart" },
            { class: "Muscle Training", time1: "", time2: "", trainer: "Paul D. Newman" },
            { class: "Body Building", time1: "10:00AM - 11:30AM", time2: "", trainer: "Boyd C. Harris" },
            { class: "Yoga Training Class", time1: "", time2: "", trainer: "Hector T. Daigle" },
            { class: "Advanced Training", time1: "", time2: "", trainer: "Bret D. Bowers" },
        ],
        Wednesday: [
            { class: "Fitness Class", time1: "", time2: "2:00PM - 3:30PM", trainer: "William G. Stewart" },
            { class: "Muscle Training", time1: "", time2: "", trainer: "Paul D. Newman" },
            { class: "Body Building", time1: "", time2: "", trainer: "Boyd C. Harris" },
            { class: "Yoga Training Class", time1: "10:00AM - 11:30AM", time2: "", trainer: "Hector T. Daigle" },
            { class: "Advanced Training", time1: "", time2: "2:00PM - 3:30PM", trainer: "Bret D. Bowers" },
        ],
        Thursday: [
            { class: "Fitness Class", time1: "", time2: "", trainer: "William G. Stewart" },
            { class: "Muscle Training", time1: "10:00AM - 11:30AM", time2: "", trainer: "Paul D. Newman" },
            { class: "Body Building", time1: "", time2: "", trainer: "Boyd C. Harris" },
            { class: "Yoga Training Class", time1: "", time2: "3:00PM - 4:00PM", trainer: "Hector T. Daigle" },
            { class: "Advanced Training", time1: "2:00PM - 3:30PM", time2: "", trainer: "Bret D. Bowers" },
        ],
        Friday: [
            { class: "Fitness Class", time1: "", time2: "", trainer: "William G. Stewart" },
            { class: "Muscle Training", time1: "", time2: "11:00AM - 12:30PM", trainer: "Paul D. Newman" },
            { class: "Body Building", time1: "", time2: "", trainer: "Boyd C. Harris" },
            { class: "Yoga Training Class", time1: "", time2: "", trainer: "Hector T. Daigle" },
            { class: "Advanced Training", time1: "4:00PM - 5:30PM", time2: "", trainer: "Bret D. Bowers" },
        ],
    };

    return (

        <>




            {/* Nav */}
            <Background /> {/* Background Video */}
            <div
                className={`w-[100vw] shadow-2xl sticky top-0 z-50 px-5 sm:px-10 md:px-20 py-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
                    }`}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className={`text-3xl sm:text-4xl font-bold ${scrolled ? 'text-black' : 'text-white'
                        }`}>
                        TRAINING<span className="text-orange-600 ml-1">STUDIO</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li
                            onClick={() => setActiveLink("HOME")}
                            className={`list-none font-semibold cursor-pointer ${activeLink === "HOME" ? 'text-orange-600' : scrolled ? 'text-black' : 'text-white'} hover:text-orange-600`}
                        >
                            <a href="/">HOME</a>
                        </li>

                        <li
                            onClick={() => setActiveLink("ABOUT")}
                            className={`list-none font-semibold cursor-pointer ${activeLink === "ABOUT" ? 'text-orange-600' : scrolled ? 'text-black' : 'text-white'} hover:text-orange-600`}
                        >
                            <a href="#About">ABOUT</a>
                        </li>

                        <li
                            onClick={() => setActiveLink("CLASSES")}
                            className={`list-none font-semibold cursor-pointer ${activeLink === "CLASSES" ? 'text-orange-600' : scrolled ? 'text-black' : 'text-white'} hover:text-orange-600`}
                        >
                            <a href="#Classes">CLASSES</a>
                        </li>

                        <li
                            onClick={() => setActiveLink("SCHEDULES")}
                            className={`list-none font-semibold cursor-pointer ${activeLink === "SCHEDULES" ? 'text-orange-600' : scrolled ? 'text-black' : 'text-white'} hover:text-orange-600`}
                        >
                            <a href="#Schedule">SCHEDULES</a>
                        </li>

                        <li
                            onClick={() => setActiveLink("CONTACT")}
                            className={`list-none font-semibold cursor-pointer ${activeLink === "CONTACT" ? 'text-orange-600' : scrolled ? 'text-black' : 'text-white'} hover:text-orange-600`}
                        >
                            <a href="#Contact">CONTACT</a>
                        </li>
                    </ul>

                </div>

                {/* Mobile Menu */}
                <ul className="md:hidden mt-4 flex flex-col gap-4">
                    <li
                        onClick={() => setActiveLink("HOME")}
                        className={`list-none font-semibold cursor-pointer ${activeLink === "HOME" ? 'text-orange-600' : scrolled ? 'text-black' : 'text-white'} hover:text-orange-600`}
                    >
                        <a href="/">HOME</a>
                    </li>

                    <li
                        onClick={() => setActiveLink("ABOUT")}
                        className={`list-none font-semibold cursor-pointer ${activeLink === "ABOUT" ? 'text-orange-600' : scrolled ? 'text-black' : 'text-white'} hover:text-orange-600`}
                    >
                        <a href="#About">ABOUT</a>
                    </li>

                    <li
                        onClick={() => setActiveLink("CLASSES")}
                        className={`list-none font-semibold cursor-pointer ${activeLink === "CLASSES" ? 'text-orange-600' : scrolled ? 'text-black' : 'text-white'} hover:text-orange-600`}
                    >
                        <a href="#Classes">CLASSES</a>
                    </li>

                    <li
                        onClick={() => setActiveLink("SCHEDULES")}
                        className={`list-none font-semibold cursor-pointer ${activeLink === "SCHEDULES" ? 'text-orange-600' : scrolled ? 'text-black' : 'text-white'} hover:text-orange-600`}
                    >
                        <a href="#Schedule">SCHEDULES</a>
                    </li>

                    <li
                        onClick={() => setActiveLink("CONTACT")}
                        className={`list-none font-semibold cursor-pointer ${activeLink === "CONTACT" ? 'text-orange-600' : scrolled ? 'text-black' : 'text-white'} hover:text-orange-600`}
                    >
                        <a href="#Contact">CONTACT</a>
                    </li>
                </ul>

            </div>


            {/* HeroSection */}
            <div className="flex flex-col justify-center items-center text-center bg-transparent gap-y-10 px-4 py-16 sm:py-24 md:py-32">
                {/* Subheading */}
                <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white mt-10 sm:mt-16">
                    WORK HARDER, GET STRONGER
                </p>

                {/* Main Heading */}
                <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-center sm:text-left">
                    EASY WITH OUR <span className="text-orange-600">GYM</span>
                </h1>


                {/* Button */}
                <a
                    href="#About"
                    className="mt-4 cursor-pointer inline-block px-6 py-3 bg-orange-600 text-white text-sm sm:text-base font-semibold rounded hover:bg-orange-700 transition-all duration-300"
                >
                    BECOME A MEMBER
                </a>
            </div>



            {/* Program Section */}
            <div id="About" className="flex flex-col items-center text-center bg-white px-4 py-10 gap-y-6 w-[100vw]">
                <h1 className="text-xl sm:text-3xl md:text-3xl font-bold text-gray-900">
                    <a href="#About">CHOOSE  <span className="text-orange-600">PROGRAM</span></a>

                </h1>
                <ul className="text-4xl text-orange-600">
                    <BiWater />
                </ul>
                <p className="text-base sm:text-lg text-gray-500 max-w-3xl">
                    "Select the perfect fitness program tailored to your goals. From strength to flexibility—start your transformation today!"
                </p>
            </div>


            {/* Program Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-10 md:px-20 lg:px-32 py-10 bg-white w-[100vw]">
                {/* Card 1 */}
                <div className="flex gap-4">
                    <img
                        src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                        alt=""
                        className="h-24 w-24 object-cover rounded-md"
                    />
                    <div>
                        <h2 className="text-xl font-bold">Basic Fitness</h2>
                        <p className="text-gray-500 text-sm">
                            "Basic fitness focuses on simple exercises and healthy habits to improve strength, flexibility, and overall well-being."
                        </p>
                        <button className="text-orange-600 font-semibold mt-2 hover:underline">
                            Discover More
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex gap-4">
                    <img
                        src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                        alt=""
                        className="h-24 w-24 object-cover rounded-md"
                    />
                    <div>
                        <h2 className="text-xl font-bold">Advanced Muscle Course</h2>
                        <p className="text-gray-500 text-sm">
                            "Advanced Muscle Course helps you build <span className='text-blue-500'>strength, size</span>, and <span className='text-blue-500'>definition</span> with expert techniques."
                        </p>
                        <button className="text-orange-600 font-semibold mt-2 hover:underline">
                            Discover More
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex gap-4">
                    <img
                        src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                        alt=""
                        className="h-24 w-24 object-cover rounded-md"
                    />
                    <div>
                        <h2 className="text-xl font-bold">New Gym Training</h2>
                        <p className="text-gray-500 text-sm">
                            "New Gym Training guides beginners with effective workouts, proper form, and tips to build strength."
                        </p>
                        <button className="text-orange-600 font-semibold mt-2 hover:underline">
                            Discover More
                        </button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="flex gap-4">
                    <img
                        src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                        alt=""
                        className="h-24 w-24 object-cover rounded-md"
                    />
                    <div>
                        <h2 className="text-xl font-bold">Yoga Training</h2>
                        <p className="text-gray-500 text-sm">
                            "Yoga Training improves flexibility, balance, and mental clarity through poses, breath control, and relaxation."
                        </p>
                        <button className="text-orange-600 font-semibold mt-2 hover:underline">
                            Discover More
                        </button>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="flex gap-4">
                    <img
                        src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                        alt=""
                        className="h-24 w-24 object-cover rounded-md"
                    />
                    <div>
                        <h2 className="text-xl font-bold">Basic Muscle Course</h2>
                        <p className="text-gray-500 text-sm">
                            "Build strength and tone with beginner-friendly workouts and easy muscle-building tips."
                        </p>
                        <button className="text-orange-600 font-semibold mt-2 hover:underline">
                            Discover More
                        </button>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="flex gap-4">
                    <img
                        src="https://themewagon.github.io/training-studio/assets/images/features-first-icon.png"
                        alt=""
                        className="h-24 w-24 object-cover rounded-md"
                    />
                    <div>
                        <h2 className="text-xl font-bold">Body Building Course</h2>
                        <p className="text-gray-500 text-sm">
                            "Gain muscle, boost strength, and sculpt your body with expert bodybuilding workouts."
                        </p>
                        <button className="text-orange-600 font-semibold mt-2 hover:underline">
                            Discover More
                        </button>
                    </div>
                </div>
            </div>



            {/* Quote */}
            <div
                id="Dumble"
                className="relative w-full min-h-[50vh] text-white flex flex-col justify-center items-center text-center gap-y-6 px-4 sm:px-6 md:px-10 py-20 overflow-hidden"
            >
                {/* Background Layer */}
                <div className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat opacity-90" style={{ backgroundImage: "url('./Image/Background-1.jpg')" }}></div>

                {/* Overlay Layer */}
                <div className="absolute inset-0 z-[-1] bg-black/60"></div>

                {/* Content */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    DON<span className="text-orange-600">'T</span> THINK, BEGIN <span className="text-orange-600">TODAY</span>!
                </h1>

                <p className="text-base sm:text-lg md:text-xl font-medium max-w-4xl text-center px-2">
                    "Don't let doubt hold you back. Stop overthinking and start taking action now. Every great journey begins with a single step—begin today and watch your dreams unfold!"
                </p>

                <a
                    href="#Classes"
                    className="mt-4 cursor-pointer inline-block px-6 py-3 bg-orange-600 text-white text-sm sm:text-base font-semibold rounded hover:bg-orange-700 transition-all duration-300"
                >
                    BECOME A MEMBER
                </a>

            </div>



            {/* Classes Header */}
            <div id='Classes' className="flex flex-col items-center text-center w-[100vw] bg-white px-4 py-12 gap-y-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    <a href="#Classes"> Our <span className="text-orange-600">Classes</span></a>
                </h1>
                <ul className="text-4xl text-orange-600">
                    <BiWater />
                </ul>
                <p className="text-base sm:text-lg text-gray-500 max-w-2xl">
                    "Explore a variety of classes designed for all fitness levels. Find what inspires you and start your fitness journey today!"
                </p>
            </div>

            {/* Classes Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-[100vw] bg-white px-20 pb-16 gap-10">

                {/* Left Side Cards */}
                <div className="flex flex-col gap-6 w-full md:w-[90%] lg:w-1/2">


                    {/* Card 1 */}
                    <div
                        onClick={HandleClick}
                        className="flex items-center gap-6 p-4 sm:p-5 bg-white shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer rounded-lg text-ora">
                        <img src={myDumble} alt="dumbbell" className="h-10 w-10" />
                        <h1
                            className={`text-lg sm:text-xl md:text-2xl font-bold  ${active === 1 ? "text-orange-500" : "text-black"}`} >
                            First Training Class
                        </h1>
                    </div>



                    {/* Card 2 */}
                    <div
                        onClick={HandleClick2}
                        className="flex items-center gap-6 p-4 sm:p-5 bg-white shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer rounded-lg">
                        <img src={myDumble} alt="dumbbell" className="h-10 w-10" />
                        <h1
                            className={`text-lg sm:text-xl md:text-2xl font-bold  ${active === 2 ? "text-orange-500" : "text-black"}`} >
                            Second Training Class
                        </h1>
                    </div>

                    {/* Card 3 */}
                    <div
                        onClick={HandleClick3}
                        className="flex items-center gap-6 p-4 sm:p-5 bg-white shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer rounded-lg">
                        <img src={myDumble} alt="dumbbell" className="h-10 w-10" />
                        <h1
                            className={`text-lg sm:text-xl md:text-2xl font-bold ${active === 3 ? "text-orange-500" : "text-black"}`} >
                            Third Training Class
                        </h1>
                    </div>

                    {/* Card 4 */}
                    <div
                        onClick={HandleClick4}
                        className="flex items-center gap-6 p-4 sm:p-5 bg-white shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer rounded-lg">
                        <img src={myDumble} alt="dumbbell" className="h-10 w-10" />
                        <h1
                            className={`text-lg sm:text-xl md:text-2xl font-bold  ${active === 4 ? "text-orange-500" : "text-black"}`} >
                            Fourth Training Class
                        </h1>
                    </div>

                </div>

                {/* Right Side Info Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center text-center gap-4 mt-6 lg:mt-12 px-2">
                    <img
                        src={photo}
                        alt="First Training"
                        className="w-full max-w-md h-52 sm:h-60 md:h-72 object-cover rounded-md shadow-md "
                    />




                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                        {heading}
                    </h1>

                    <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                        {text}
                    </p>

                    <Link to="/Nav/Schedule">
                        <button className="px-5 py-2 mt-2 bg-orange-600 text-white hover:bg-orange-700 transition-all rounded">
                            <a href="/">  VIEW SCHEDULE</a>
                        </button>
                    </Link>
                </div>
            </div >



            {/* Schedule */}

            < div id="Schedule" className="relative w-full text-white" >

                {/* Overlay Layer */}
                < div className="absolute inset-0 bg-black/60 z-[-1]" ></div >

                {/* Background Image */}
                < div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-[-2]"
                    style={{ backgroundImage: "url('./Image/Background-2.jpg')" }
                    }></div >

                {/* Inner Content */}
                < div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 py-12 sm:py-20 px-4 sm:px-6" >

                    {/* Header */}
                    < h1 className="text-3xl sm:text-4xl font-bold" >
                        <a href="#Schedule">Classes <span className="text-orange-600">Schedule</span></a>
                    </h1 >
                    <div className="text-4xl text-orange-600"><BiWater /></div>
                    <p className="text-sm sm:text-lg font-semibold max-w-2xl">
                        "Explore a variety of classes designed for all fitness levels. Find what inspires you and start your fitness journey today!"
                    </p>

                    {/* Day Tabs */}
                    {/* Day Tabs */}
                    <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 font-semibold text-sm sm:text-base">
                        {["Monday", '/', "Tuesday", '/', "Wednesday", '/', "Thursday", '/', "Friday"].map((day) => (
                            <li
                                key={day}
                                className={`cursor-pointer transition-all duration-300 hover:text-orange-600 ${activeDay === day ? "text-orange-600" : ""
                                    }`}
                                onClick={() => setActiveDay(day)}
                            >
                                {day}
                            </li>
                        ))}
                    </ul>

                    {/* Grid */}
                    <div className="overflow-x-auto w-full mt-6">
                        <div className="grid grid-cols-2 sm:grid-cols-4 text-sm text-center border-2 border-white w-[90%] min-w-[600px] mx-auto">
                            {scheduleData[activeDay].map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="border border-white py-6 font-semibold">{item.class}</div>
                                    <div className="border border-white py-6">{item.time1}</div>
                                    <div className="border border-white py-6">{item.time2}</div>
                                    <div className="border border-white py-6">{item.trainer}</div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                </div >


            </div >





            {/* Trainers Section */}
            <div className="bg-gradient-to-b from-white via-orange-50 to-white w-full px-4 sm:px-6 lg:px-10 py-16">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center gap-4">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        EXPERT <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">TRAINERS</span>
                    </h1>
                    <div className="text-4xl text-orange-600"><BiWater /></div>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
                        "Expert trainers do more than teach — they inspire, empower, and elevate..."
                    </p>
                </div>

                {/* Trainer Cards */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">

                    {/* Trainer 1 */}
                    <div className="group  w-full max-w-sm h-[400px]">
                        <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                            {/* Front Side */}
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 backface-hidden">
                                <img src={Trainer_First} alt="Trainer" className="h-48 w-48 rounded-full object-cover shadow-lg" />
                                <h5 className="text-orange-600 text-sm font-medium mt-4">Strength Trainer</h5>
                                <h2 className="text-xl font-bold text-gray-800 capitalize">Sangram Chougule</h2>
                            </div>

                            {/* Back Side */}
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 [transform:rotateY(180deg)] backface-hidden">
                                <p className="text-gray-600 text-sm text-center mb-4">
                                    Sangram Chougule, born in 1979, is a celebrated Indian bodybuilder and 6-time Mr. India and Mr. Universe titleholder. Known for his disciplined lifestyle and powerful physique, he has inspired countless fitness enthusiasts across the country. Sangram is also a fitness entrepreneur and public speaker, promoting health, strength, and natural bodybuilding through his journey and training programs.
                                </p>
                                <div className="flex gap-4 text-xl text-gray-700">
                                    <a href="https://www.facebook.com/share/15giTSmCFd/" className="transition-transform duration-500 hover:rotate-[360deg] hover:text-orange-500"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/sangram_chougule_official" className="transition-transform duration-500 hover:rotate-[360deg] hover:text-orange-500"><FaSquareInstagram /></a>
                                    <a href="https://www.youtube.com/@sangramchouguleofficial" className="transition-transform duration-500 hover:rotate-[360deg] hover:text-orange-500"><FaYoutube /></a>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Trainer 2 */}
                    <div className="group  w-full max-w-sm h-[400px]">
                        <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                            {/* Front Side */}
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 backface-hidden">
                                <img src={Trainer_Second} alt="Trainer" className="h-48 w-48 rounded-full object-cover shadow-lg" />
                                <h5 className="text-orange-600 text-sm font-medium mt-4">Muscle Trainer</h5>
                                <h2 className="text-xl font-bold text-gray-800 capitalize">Ronnie Coleman</h2>
                            </div>

                            {/* Back Side */}
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 [transform:rotateY(180deg)] backface-hidden">
                                <p className="text-gray-600 text-sm text-center mb-4">
                                    Ronnie Coleman, born in 1964, is an 8-time Mr. Olympia and one of the most legendary bodybuilders in history. Known for his incredible mass, strength, and iconic catchphrases like “Yeah buddy!”, he redefined the standards of professional bodybuilding. Beyond competition, Ronnie inspires millions through his dedication, discipline, and legacy in the fitness world.
                                </p>
                                <div className="flex gap-4 text-xl text-gray-700">
                                    <a href="https://www.facebook.com/share/1CC473YJbz/" className="transition-transform duration-500 hover:rotate-[360deg] hover:text-orange-500"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/ronniecoleman8" className="transition-transform duration-500 hover:rotate-[360deg] hover:text-orange-500"><FaSquareInstagram /></a>
                                    <a href="https://www.youtube.com/@RonnieColeman8" className="transition-transform duration-500 hover:rotate-[360deg] hover:text-orange-500"><FaYoutube /></a>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Trainer 3 */}

                    <div className="group  w-full max-w-sm h-[400px]">
                        <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                            {/* Front Side */}
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 backface-hidden">
                                <img src={Trainer_Third} alt="Trainer" className="h-48 w-48 rounded-full object-cover shadow-lg" />
                                <h5 className="text-orange-600 text-sm font-medium mt-4">Power Trainer</h5>
                                <h2 className="text-xl font-bold text-gray-800 capitalize">Nitin Chandila</h2>
                            </div>

                            {/* Back Side */}
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 [transform:rotateY(180deg)] backface-hidden">
                                <p className="text-gray-600 text-sm text-center mb-4">
                                    Nitin Chandila, born in 1997, is a renowned Indian professional bodybuilder, fitness influencer, and Mr. India titleholder. Known for his massive physique, dedication, and discipline, he has become a youth icon in the fitness world. With a strong presence on social media, Nitin motivates millions to pursue a healthy lifestyle and achieve their bodybuilding goals naturally and consistently.
                                </p>
                                <div className="flex gap-4 text-xl text-gray-700">
                                    <a href="https://www.facebook.com/share/16gce2Px5R/" className="transition-transform duration-500 hover:rotate-[360deg] hover:text-orange-500"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/nitinchandila" className="transition-transform duration-500 hover:rotate-[360deg] hover:text-orange-500"><FaSquareInstagram /></a>
                                    <a href="https://www.youtube.com/@nitinchandilaofficial" className="transition-transform duration-500 hover:rotate-[360deg] hover:text-orange-500"><FaYoutube /></a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>






            {/* Contact  */}

            < div id='Contact' className="flex flex-col lg:flex-row w-[100vw] min-h-screen" >

                <a href="#Contact">.</a>
                {/* Left - Google Map */}
                <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
                    <LoadScript googleMapsApiKey="AIzaSyBpgZ65NiewGg7Tqr7uz3DknfOx9Vdpls8">
                        <GoogleMap
                            mapContainerStyle={{ width: "100%", height: "100%" }}
                            center={center}
                            zoom={12}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                </div>

                {/* Right - Contact Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center py-10 px-4" id="bgDumbull">
                    <div className="bg-white rounded-lg w-full max-w-lg p-6 sm:p-8 flex flex-col gap-4">

                        <input
                            type="text"
                            placeholder="Your Name*"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />

                        <input
                            type="email"
                            placeholder="Your Email*"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />

                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-600"
                        ></textarea>

                        <button className="bg-orange-600 text-white rounded-md py-2 w-full sm:w-1/2 hover:bg-orange-700 transition">
                            BECOME A MEMBER
                        </button>
                    </div>
                </div>

            </div >


        </>
    )
}

export default Schedule