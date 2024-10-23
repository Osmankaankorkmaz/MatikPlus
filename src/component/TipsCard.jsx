import React from 'react';

const TipsCard = ({ title, description }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-60 bg-[#6c757d] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 text-white mx-auto cursor-default">
      <div className="pt-4 pb-4 px-6 text-center h-full flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <div className="text-sm sm:text-base md:text-lg leading-relaxed break-words flex-1 overflow-hidden">
          <div className="">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
