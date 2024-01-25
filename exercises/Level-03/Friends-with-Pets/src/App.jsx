import { useState } from 'react'
import Friend from './components/Friend'
import friendsData from './friendsData'

function App() {
  const friendsList = friendsData.map((friend, index) => {
    //console.log(friend)
    return <Friend 
      key={index}
      name={friend.name}
      age={friend.age}
      pets={friend.pets}
    />
  })

  return (
    <div>
      {friendsList}
    </div>
  )
}

export default App
