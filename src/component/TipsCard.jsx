import React from 'react';

const TipsCard = ({ title, description }) => {
  return (
    <div className="w-full max-w-xs h-60 bg-[#6c757d] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 text-white mx-auto cursor-default ">
      <div className="pt-2 pb-2 px-4 text-center h-full flex flex-col justify-center">
        <h3 className="text-lg sm:text-base md:text-lg font-bold mb-10">{title}</h3>
        <div className="text-sm leading-relaxed break-words h-24 flex items-center justify-center">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TipsCard;
