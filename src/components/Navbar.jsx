import React, {useState} from 'react';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from  'react-icons/ai'
import {HiOutlineMenuAlt4} from  'react-icons/hi'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='flex w-full justify-between items-center h-20 px-10 absolute z-10'>
        <div>
            <h1 className="sm:max-w-[300px] mt-10 mb-1 text-center bg-stone-950/50 border p-1 rounded-md font-serif text-xl md:text-4xl text-white">
                ACROSS THE WORLD
            </h1>
        </div>
            <ul className='hidden md:flex className=" text-center bg-stone-100/50 rounded-md '>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex'>
                <BiSearch size={30}/>
                <BsPerson size={30}/>
            </div>
            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? <AiOutlineClose className='text-black cursor-pointer' size={20}/> : <HiOutlineMenuAlt4 size={30} className='cursor-pointer'/>}
                
            </div>

            {/* Mobile Menu DropDown */}
            <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-slate-300/90 px-10 py-7 flex flex-col' : 'absolute left-[-100%] top-0 w-full bg-teal-100/90 px-10 py-7 flex flex-col'}>
                <ul>
                    <h1 className='text-black'>TRAVEL</h1>
                    <li className='border-b text-black'>Home</li>
                    <li className='border-b text-black'>Destinations</li>
                    <li className='border-b text-black'>Travel</li>
                    <li className='border-b text-black'>View</li>
                    <li className='border-b text-black'>Book</li>
                    <div className='flex flex-col'>
                        <button className='my-6'>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='flex justify-between my-6'>
                        <FaFacebook className="icon"/>
                        <FaTwitter className="icon"/>
                        <FaYoutube className="icon"/>
                        <FaInstagram className="icon"/>
                    </div>
                </ul>
            </div>
        

    </div>
  )
}

export default Navbar