import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import snowVideo from "../assets/snowVideo.mp4";
import Kedarnath from "../assets/Kedarnath.jpg";
import Munnar from "../assets/munnar.jpeg";
import HaveLock from "../assets/havelock.webp";
import Trek from "../assets/Trek.jpg";
import DudhSagar from "../assets/dudhsagar.jpg";
import DhanushKodi from "../assets/DhanushKodi.jpg";
import TajMahal from "../assets/Taj Mahal.jpeg";

const PackageCard = () => {
  const packages = [
    {
      name: "Kedarnath",
      image: Kedarnath,
      price: 14999,
      ex: "ex-delhi",
      days: "4 Nigths/5 Days",
      description: "Burn Fat and Build Muscle in only 30 minutes a week! Our Emsculpt package includes four (4) weekly sessions.",
    },
    {
      name: "Kerala",
      image: Munnar,
      price: 19999,
      days: "4 Nights / 5 Days",
      ex: "ex: Hyd",
      description: "Description for Emerald Laser (8 Treatments) package goes here.",
    },
    {
      name: "Havelock",
      image: HaveLock,
      price: 7999,
      days: "3 Nights / 4 Days",
      ex: "ex: Mumbai",
      description: "Description for Havelock Island package goes here.",
    },
    {
      name: "Monsoon Treks",
      image: Trek,
      price: 3999,
      days: "1 Night / 2 Days",
      ex: "ex: Hyd, Pune, Mumbai",
      description: "Description for Monsoon Treks package goes here.",
    },
    {
      name: "Dudh-Sagar & Dandeli",
      image: DudhSagar,
      price: 6999,
      days: "2 Nights / 3 Days",
      ex: "ex: Hyd",
      description: "Description for Dudh-Sagar & Dandeli package goes here.",
    },
    {
      name: "Dhanushkodi",
      image: DhanushKodi,
      price: 4999,
      days: "2 Nights / 3 Days",
      ex: "ex: Chennai",
      description: "Description for Dhanushkodi package goes here.",
    },
    // {
    //   name: "Taj Mahal",
    //   image: TajMahal,
    //   price: 2999,
    //   days: "1 Day",
    //   ex: "ex: Delhi",
    //   description: "Description for Taj Mahal package goes here.",
    // },
  ];

  return (
    <div className="mt-20 md:mt-10 mx-3">
    <div className="md:bg-secondary-bg md:p-6 mt-4 text-gray-700 rounded-sm md:mx-5 mb-5">
      <div className="text-2xl font-bold p-2  text-center">Our Packages</div>
      <div className="text-center m-2 font-bold text-sm">
        Exclusive Packages with up to 10% off certain packages
      </div>
      <div className="grid gap-4 p-4 bg-white shadow rounded-sm">
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-white border-1 shadow-sm hover:shadow-md rounded-md">
              <div>
                <img src={pkg.image} alt="" className="w-full h-[300px] object-cover rounded-t-md" />
              </div>
              <div className="grid gap-2 p-4">
                <div className="text-xl font-bold">{pkg.name}</div>
                <div className="text-md font-semibold">${pkg.price}</div>
                <div
                  className="text-sm text-primary-color w-fit font-bold hover:underline cursor-pointer"
                >
                  See Package
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default PackageCard;


