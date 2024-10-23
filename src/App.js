import React from 'react';
import Home from './Home';
import Navbar from './layout/Navbar';
import MathHeader from './layout/MathHeader';
import Footer from './layout/Footer';


function App() {
  return (
    <div className="App">
      <MathHeader />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
