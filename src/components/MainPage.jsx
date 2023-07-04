import React from "react";
import beachVideo from "../assets/beachVideo.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const MainPage = () => {
    return (
        <div className="w-full h-screen relative">
            <video 
                className="w-full h-full object-cover" 
                src={beachVideo} 
                autoPlay 
                loop 
                muted 
            />
            <div className="absolute w-full h-full top-0 left-0">
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center">
                    {/* <div>
                        <h2>First Class Travel</h2>
                        <h2>Top Locations in India</h2>
                    </div> */}
                    <form className="flex justify-between items-center w-[300px] sm:w-[600px] mx-auto w-full border p-1
                    rounded-md text-black bg-white">
                        <div>
                            <input className="bg-transparent w-[100px] sm:w-[400px] focus:outline-none" 
                            type="text" placeholder="Search Destinations" />
                        </div>
                        <div>
                            <button><AiOutlineSearch size={20} className="icon" style={{color: "#fff"}}/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MainPage;