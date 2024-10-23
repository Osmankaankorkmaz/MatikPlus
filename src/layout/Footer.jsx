import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-[#6c757d] text-white p-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-6 md:mb-0">
                    <h5 className="text-2xl font-bold">MatikPlus</h5>
                    <p className="mt-2 text-sm">Matematik ve hesaplamaların merkezi. Tüm haklar saklıdır.</p>
                </div>
                
                <div className="flex flex-col md:flex-row md:space-x-12 mb-6 md:mb-0">
                <div className="flex flex-col">
            <h6 className="font-semibold mb-2">Hızlı Bağlantılar</h6>
            <Link 
                to="Home" 
                smooth={true} 
                duration={500} 
                className="relative mb-1 cursor-pointer group"
            >
                Ana Sayfa
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
                to="operations" 
                smooth={true} 
                duration={500} 
                className="relative mb-1 cursor-pointer group"
            >
                İşlemler
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
                to="Tips" 
                smooth={true} 
                duration={500} 
                className="relative mb-1 cursor-pointer group"
            >
                İpuçları
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
                to="Terms" 
                smooth={true} 
                duration={500} 
                className="relative mb-1 cursor-pointer group"
            >
                Terimler
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </div>
                    <div className="flex flex-col mt-6 md:mt-0">
                        <h6 className="font-semibold mb-2">İletişim Bilgileri</h6>
                        <p className="mb-1">Email: info@matikplus.com</p>
                        <p className="mb-1">Telefon: (123) 456-7890</p>
                        <p>Adres: Örnek Mah. No:1, İstanbul, Türkiye</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4 border-t border-white pt-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} MatikPlus. Tüm Hakları Saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;
