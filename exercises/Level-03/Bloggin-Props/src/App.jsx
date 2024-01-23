import { useState } from 'react'
import Data from './BookData'
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
{/* Importing Font Awesome fonts for the footer component*/ }
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
{/* Adding all the imported Font Awesome Icons here to be used */ }
library.add(faFacebook, faTwitter, faGithub)

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
