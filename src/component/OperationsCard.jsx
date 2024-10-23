import React from 'react';

const OperationsCard = ({ imageSrc, title, description, onClick }) => {
  return (
    <div 
      className=" w-full max-w-xs h-auto bg-[#6c757d] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 text-white mx-auto cursor-pointer" 
      onClick={onClick}  // Burada onClick olayını tanımlayın
    >
      <div className="flex justify-center items-center h-48 md:h-60">
        <img src={imageSrc} alt={title} className="w-24 h-24 sm:w-40 sm:h-40 md:w-52 md:h-52 object-cover" />
      </div>
      
      <div className="pt-2 pb-2 px-4 text-center">
        <h3 className="text-lg sm:text-base md:text-lg font-bold mb-2">{title}</h3>
        <div className="text-sm leading-relaxed break-words max-h-0 overflow-hidden sm:max-h-20 sm:overflow-y-auto scrollbar-hide">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OperationsCard;
