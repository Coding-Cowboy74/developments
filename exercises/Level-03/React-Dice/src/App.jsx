import { useState } from 'react'
import DiceBox from './components/DiceBox'


function App() {

  const [dice, setDice] = useState([1,2,3,4,5])
  
  const getNumbers = () => {
    return Math.floor(Math.random() * 6) + 1
  }

 
  const rollDice = () => {
    setDice([
      getNumbers(),
      getNumbers(),
      getNumbers(),
      getNumbers(),
      getNumbers()
    ])
  }

  const listOfNums = dice.map(num => <DiceBox number={num} />)
  return (
    <div>
      <div className='header'>
        <h1>The React Dice Game</h1>
      </div>
      <div className='main'>
      
        {listOfNums}
        <button className='btnRoll' onClick={rollDice}>Roll Dice</button>
      </div>

    </div>
    
    
  )
}

export default App
