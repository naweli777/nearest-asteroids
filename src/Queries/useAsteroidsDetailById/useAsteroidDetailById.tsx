import { useQuery } from "react-query";
import axios from "axios";

const getAsteroidsDetails = (id: string|undefined) => {
  return axios
    .get(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => res.data);
};
const useAsteroidDetailById = (id: string|undefined) => {
  return useQuery(["asteroids", id], () => getAsteroidsDetails(id), {
    enabled: id ? true : false,
  });
};

export default useAsteroidDetailById;
