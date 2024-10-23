import React, { useState } from 'react';
import Logo from '../img/MatikPlusLogo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Sticky sınıfını ekledik
        <nav className="bg-[#6c757d] p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <img src={Logo} alt="Matematikci.com Logo" className="w-24 h-24 object-contain" />
                </div>
                {/* Hamburger buton sadece mobil görünümde (lg altında) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                        />
                    </svg>
                </button>
                {/* Menü - lg ekranlarda her zaman görünür */}
                <div
                    className={`lg:flex lg:items-center lg:space-x-6 overflow-hidden transition-all duration-500 ease-in-out transform ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} lg:max-h-full lg:opacity-100 lg:block`}
                >
                    <Link
                        to="Home"
                        smooth={true} 
                        duration={500}
                        className="text-white block lg:inline-block mt-2 lg:mt-0 relative group transition-all duration-300 ease-in-out cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        Ana Sayfa
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="operations"
                        smooth={true}
                        duration={500}
                        className="text-white block lg:inline-block mt-2 lg:mt-0 relative group transition-all duration-300 ease-in-out cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        İşlemler
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="Tips"
                        smooth={true}
                        duration={500}
                        className="text-white block lg:inline-block mt-2 lg:mt-0 relative group transition-all duration-300 ease-in-out cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        İpuçları
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="Terms"
                        smooth={true}
                        duration={500}
                        className="text-white block lg:inline-block mt-2 lg:mt-0 relative group transition-all duration-300 ease-in-out cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        Terimler
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
