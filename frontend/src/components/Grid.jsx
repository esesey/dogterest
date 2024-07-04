import { useEffect, useState } from "react";
import Dog from "./Dog";

const Grid = () => {
    let counter = 0
    const [dogs, setDogs] = useState([]) 
    const [dogsToShow, setDogsToShow] = useState(10)
   
    useEffect(()=>{
        /* fetch('http://localhost:5432/data')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            dogs = json
        }) */
        fetch('https://random.dog/doggos')
        .then((response) => response.json())
        .then(json => {
            setDogs(json)
        }) 
    }, [])

    const handleShowMoreDogs = () => {
        setDogsToShow(dogsToShow + 10)
    }

    return(
        <div>
            <h2>Dogterest</h2>
            <div className="_grid">
                {dogs.map((dog) => {
                    counter++
                    if (counter>dogsToShow) return
                    return (
                    <div key={dog}>
                        <Dog dog={dog}></Dog>
                    </div>
                    )
                })}
            </div>
            <button onClick={handleShowMoreDogs}>Загрузить ещё собак</button>
        </div>
        
    )
}

export default Grid