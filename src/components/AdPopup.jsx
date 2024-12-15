import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const AdPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the ad 3 seconds after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3000ms = 3 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Function to close the ad popup
  const closeAd = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* Main Content
      <div className={`p-6 text-center transition-all duration-300 ${isVisible ? 'blur-md' : ''}`}>
        <h1 className="text-4xl">Main Content of the Page</h1>
        <p className="mt-4">This is the main page content, and the ad will appear in 3 seconds.</p>
      </div> */}

      {/* Advertisement Popup */}
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-950 bg-opacity-30 backdrop-blur-md">
          <div className="relative bg-neutral-950 text-gray-800 w-[85%] md:w-[55%] lg:max-w-[50%] p-6 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-4 text-gray-100 hover:text-gray-300"
              onClick={closeAd}
            >
              &times;
            </button>
            <div className='w-fit lg:min-w-[180px] flex items-center gap-10 lg:w-32 p-2 pl-1 pr-2 rounded cursor-pointer'>
              <img className='w-20 sm:w-20 md:w-32 lg:mt-4 rounded' src={assets.zayn_album} alt="" />
              <div className='flex flex-col gap-1 mt-2'>
              <img className='w-20 lg:w-28' src={assets.auralis_white_logo} alt="" />
                <h2 className="text-lg md:text-2xl lg:text-3xl text-teal-50 font-bold w-[225px] lg:w-[345px] mt-1">ZAYN's Stardust EP</h2>
                <p className='text-teal-100 text-xs font-bold md:text-lg lg:text-lg'>Listen Now</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default AdPopup;
