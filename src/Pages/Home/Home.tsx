import { useAsteroids, useNearestAsteroids } from "Queries";
import AsteroidCard from "components/AsteroidCard/AsteroidCard";
import styled from "styled-components";
import { useState } from "react";
import Button from "components/Button/Button";
function Home() {
  const { isLoading, data } = useAsteroids();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { data: nearestAsteroids, refetch } = useNearestAsteroids(
    startDate,
    endDate
  );

  const handleStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  console.log({
    nearestAsteroids,
  });
  if (isLoading) {
    <h4>Loading..</h4>;
  }
  return (
    <>
      <input
        type="date"
        id="date"
        placeholder="Start Date"
        value={startDate}
        onChange={handleStartDate}
      />
      <input
        type="date"
        id="date"
        placeholder="End Date "
        value={endDate}
        onChange={handleEndDate}
      />
      <Button title="Nearest Fireballs" onClicked={()=>refetch()} />
      <Container>
        {data?.near_earth_objects?.map((asteroid: any) => (
          <AsteroidCard key={asteroid?.id} {...asteroid} />
        ))}
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;
