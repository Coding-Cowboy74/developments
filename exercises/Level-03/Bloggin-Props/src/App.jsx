import { useState } from 'react'
import Data from './Data'
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

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
