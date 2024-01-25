import React from "react";
import Pets from './Pets'

function Friend(props) {
    
    
    const petsList = props.pets.map((pet, index) => {
        console.log(props.pets)
        return (
            <div>
                <Pets 
                    key={pet.ID}
                    name={pet.name}
                    breed={pet.breed}
                />
            </div>
        )
    })

    return (
        <div>
            <h2>Friends Name: {props.name}</h2>
            <h3>Friends age: {props.age}</h3>
            <div>
                 <h3>Pets: </h3>
                {petsList}
            </div>
            
            <hr></hr>
        </div>
    )
}

export default Friend