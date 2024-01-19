import { useState } from 'react'
import Data from './Data'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  console.log(Data);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default App
