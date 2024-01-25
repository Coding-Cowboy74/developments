import React from "react"
import Spots from "./components/Spots"
import vacationSpots from './vacationSpots'
function App() {
  
 const vacaSpots = vacationSpots.map((vaca, index) => {
  //console.log(vaca)

          return <Spots 
          key={index}
          place={vaca.place}
          price={vaca.price}
          timeToGo={vaca.timeToGo}
/>
 })

  return (
    <div>
      {vacaSpots}
    </div>
  )
}

export default App
