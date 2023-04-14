import axios from "axios"
import { useEffect, useState } from "react"



const Personas = (props) => {
    const [persona, setPersona] = useState({})
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + props.match.params.id)
            .then(response => response.data)
            .then(result => {
                console.log(result);
                setPersona(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <h1>Ruta personas {props.match.params.id}</h1>
            <div >
        {
          Object.keys(persona).map((key) => {
            return key === "name"
              ? <h2 key={key}>{persona[key]}</h2>
              : <p key={key}>{key}: {persona[key]}</p>
          })
        }
      </div>
    </>
    
    )
}

export default Personas