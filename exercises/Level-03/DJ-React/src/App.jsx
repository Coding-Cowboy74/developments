import { useState } from 'react'
import Box from './components/box'

function App() {

const [color, setColors] = useState(["white", "white", "white", "white"])
//console.log(state)


const changeColor = () => {
  setColors((prevState) =>{
    return prevState === "blue" ? "white": "blue"
  })
}


  return (
    <div>
      <h1>DJ - React</h1>
      <p className='instruct'>
        Feel free to test out the app by selecting any of the buttons and watch the boxes change all based on the button 
        that you are selecting. 
      </p>

      <div className='boxes'>
        <Box background={color}/>
        <Box background='blue'/>
        <Box background='blue'/>
        <Box background='blue'/>
      </div>
      
      <div>
        <button onClick={changeColor}>Change Color</button>
      </div>

      <p className='footerStyle'>
        Created by SJ Martin copyright <span className='copyright'>&copy;</span> 2024 - SJ Web Designs Inc. 
      </p>
    </div>
  )
}

export default App
