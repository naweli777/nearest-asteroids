import { useQuery } from "react-query";
import axios from "axios";

const getNearestAsteroids = (StartDate:string,EndDate:string) => {
  return axios
    .get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${StartDate}&end_date=${EndDate}&api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res) => res.data);
};
const useNearestAsteroids = (StartDate:string,EndDate:string) => {
  return useQuery(["asteroids",{
      StartDate,EndDate
  }],()=> getNearestAsteroids(StartDate,EndDate),{
      enabled:StartDate.length>0 && EndDate.length>0
  });
};

export default useNearestAsteroids;
