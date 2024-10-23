import React from 'react'

const MathHeader = () => {
    return (
        <header id="Home" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://news.harvard.edu/wp-content/uploads/2022/11/iStock-mathproblems.jpg')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-center">
                <div className="text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">MatikPlus Dünyasına Hoşgeldiniz</h1>
                    <p className="text-lg md:text-xl mb-8">Matematik ve hesaplamaların merkezi</p>
                </div>
            </div>
        </header>
    );
};

export default MathHeader