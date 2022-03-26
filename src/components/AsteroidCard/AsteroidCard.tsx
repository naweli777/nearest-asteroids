import { FC } from "react"
import {Container} from "./AsteroidCard.styled"

interface Asteroid{
  name:string,
  name_limited:string,
  absolute_magnitude_h:number,
  is_potentially_hazardous_asteroid:boolean
}

const AsteroidCard:FC<Asteroid> = ({name,name_limited,absolute_magnitude_h,is_potentially_hazardous_asteroid}) => {  
  return (
    <Container>
        <h2>Name -{name}</h2>
        <h2>AKA -{name_limited}</h2>
        <h2>Magnitude -{absolute_magnitude_h}</h2>
        <h2>Effect on Earth -{is_potentially_hazardous_asteroid?"Destructive":"No effect"}</h2>

    </Container>







  )
}

export default AsteroidCard