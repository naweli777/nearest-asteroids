import { useAsteroidDetailById } from "Queries";
import{useParams} from "react-router-dom"
const AsteroidsDetails = () => {

  const {asteroidId} = useParams<{asteroidId:string}>();
  const {isLoading,data}=useAsteroidDetailById(asteroidId) 
  console.log({isLoading, data})
  return (
    <div>
      <h1>This is details regarding asteroid: {data?.name}</h1>
      <h1>This is AKA: {data?.name_limited}</h1>
      <h1>Unique Id: {data?.id}</h1>
      <h1>Estimitated max area : {data?.estimated_diameter?.kilometers?.estimated_diameter_max}</h1>
      <h1>Estimitated min area : {data?.estimated_diameter?.kilometers?.estimated_diameter_min}</h1>

      <h1>Effect on Earth: {data?.is_potentially_hazardous_asteroid?"Destructive":"No Effects"}</h1>

      


      <h1></h1>

      

     
      
    </div>
  )
}

export default AsteroidsDetails