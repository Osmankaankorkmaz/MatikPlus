import React from 'react';

const MathModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#6c757d] rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/4 relative">
        {/* Sağ üst köşede çarpı butonu */}
        <button 
          className="absolute top-2 right-2 text-white hover:text-black transition duration-200 ease-in-out"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal başlığı ve içeriği */}
        <h2 className="text-white text-center text-lg font-bold mb-4">{content.title}</h2>
        <div className="text-white text-sm sm:text-base mb-4">{content.body}</div>
      </div>
    </div>
  );
}

export default MathModal;
