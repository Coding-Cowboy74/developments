import { useState } from 'react'
import Box from './components/box'

function App() {

const [color, setColors] = useState(["white", "white", "white", "white"])
//console.log(state)


const changeColor = () => {
}

/*You will have one button that will change all four squares either black or white. White if the first one
  is not white. Black if the first is white.*/ 

const smallTimeDJ = () => {
  setColors((prevState) => {
    if (prevState[0] === "white") 
      return ["black", "black", "black", "black"]
    else
      return ["white", "white", "white", "white"]
  })
}

/*  Add a second button. The second button will turn the top half (both squares) of the grid purple. */
const purpleDJ = () => {
  setColors((prevState) => {
    return ["purple", "purple", prevState[2], prevState[3]]
  })
}

/* Add two more buttons, for a total of four. These next two will change the colors of the bottom 
   squares blue, but indivisually. One will be linked to the bottom left, and the other to the bottom
   right. */

const bottomLeft = () => {
  setColors((prevState) => {
    return [prevState[0], prevState[1], "blue", prevState[3]]
  })
}

const bottomRight = () => {
  setColors((prevState) => {
    return [prevState[0], prevState[1], prevState[2], "blue"]
  })
}

/* Your next four buttons will each be linked to one of the squares. These buttons can have any effect 
   on those squares that you wish. */

const topLeft = () => {
  setColors((prevState) => {
    return ["orange", prevState[1], prevState[2], prevState[3]]
  })
}

const topRight = () => {
  setColors((prevState) => {
    return [prevState[0], "olive", prevState[2], prevState[3]]
  })
}

const botLeft = () => {
  setColors((prevState) => {
    return [prevState[0], prevState[1], "blueViolet", prevState[3]]
  })
}

const botRight = () => {
  setColors((prevState) => {
    return [prevState[0], prevState[1], prevState[2], "chartreuse"]
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
        <Box background={color[0]}/>
        <Box background={color[1]}/>
        <Box background={color[2]}/>
        <Box background={color[3]}/>
      </div>
      
      <div>
        <button onClick={changeColor}>Change Color</button>
        
        <button onClick={smallTimeDJ}>Small Time DJ</button>
        <button onClick={purpleDJ}>Purple DJ</button>

        <button onClick={bottomLeft}>Bottom Left</button>
        <button onClick={bottomRight}>Bottom Right</button>
      
        <button onClick={topLeft}>Top Left</button>
        <button onClick={topRight}>Top Right</button>
        <button onClick={botLeft}>Bot Left</button>
        <button onClick={botRight}>Bot Right</button>
      </div>

      <p className='footerStyle'>
        Created by SJ Martin copyright <span className='copyright'>&copy;</span> 2024 - SJ Web Designs Inc. 
      </p>
    </div>
  )
}

export default App
