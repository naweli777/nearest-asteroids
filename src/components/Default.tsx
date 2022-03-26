import {useAsteroids}  from "../Queries";
import AsteroidCard from "./AsteroidCard/AsteroidCard";
function Default() {


    const {isLoading,data} = useAsteroids();

    if(isLoading)
    {
        <h4>Loading..</h4>
    }
  return (
    <div>
        {data?.near_earth_objects?.map((asteroid:any)=><AsteroidCard key={asteroid?.id} {...asteroid}/>
)}

    </div>
  )
}

export default Default