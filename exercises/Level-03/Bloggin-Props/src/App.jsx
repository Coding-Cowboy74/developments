import { useState } from 'react'
import Data from './Data'
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';

function App() {
  
  console.log(Data);
  return (
    <div>
      <Header />
      <BlogList />
      <Footer />
    </div>
  )
}

export default App
