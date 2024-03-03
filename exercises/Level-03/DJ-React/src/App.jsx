import { useState } from 'react'
import Grid from './components/grid'
import Buttons from './components/buttons'

function App() {
const colorsList = ["white", "white", "white", "white"]
const [color, setColors] = useState(colorsList)

  return (
    <div>
      <h1>DJ - React</h1>
      <p className='instruct'>
        Feel free to test out the app by selecting any of the buttons and watch the boxes change all based on the button 
        that you are selecting. 
      </p>
      <Grid />
      <Buttons />
      <p className='footerStyle'>
        Created by SJ Martin copyright <span className='copyright'>&copy;</span> 2024 - SJ Web Designs Inc. 
      </p>
    </div>
  )
}

export default App
