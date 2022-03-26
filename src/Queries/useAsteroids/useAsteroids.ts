import {useQuery} from 'react-query';
import axios from 'axios';

const getAsteroids =()=>
{
return axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.REACT_APP_API_KEY}&size=10`)
      .then((res)=>res.data)

}
const useAsteroids = () => {
  return useQuery('asteroids',getAsteroids)
}

export default useAsteroids