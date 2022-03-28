import { useAsteroids, useNearestAsteroids } from "Queries";
import AsteroidCard from "components/AsteroidCard/AsteroidCard";
import styled from "styled-components";
import { useState } from "react";
function Home() {
  const { isLoading, data } = useAsteroids();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { data: nearestAsteroids, isLoading: fetching } = useNearestAsteroids(
    startDate,
    endDate
  );

  const handleStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };
  return (
    <>
      <InputContainer>
        <h4>Choose a date range: </h4>

        <Input
          type="date"
          id="date"
          placeholder="Start Date"
          value={startDate}
          onChange={handleStartDate}
        />
        <Input
          type="date"
          id="date"
          placeholder="End Date"
          value={endDate}
          onChange={handleEndDate}
        />
      </InputContainer>
      {fetching ? (
        <LoadingText>
          Loading nearest asteroids to you for the date.....
        </LoadingText>
      ) : isLoading ? (
        <LoadingText>Loading...</LoadingText>
      ) : nearestAsteroids ? (
        Object.entries(nearestAsteroids?.near_earth_objects)?.map(
          ([date, value]: any) => {
            return (
              <>
                <DateTitleDiv>
                  <h1>The nearest asteroid to Earth on: {date}</h1>
                </DateTitleDiv>
                <Container>
                  {value?.map((asteroid: any) => (
                    <AsteroidCard key={asteroid?.id} {...asteroid} />
                  ))}
                </Container>
              </>
            );
          }
        )
      ) : (
        <Container>
          {data?.near_earth_objects?.map((asteroid: any) => (
            <AsteroidCard key={asteroid?.id} {...asteroid} />
          ))}
        </Container>
      )}
    </>
  );
}

export default Home;

const Container = styled.div`
  padding: 0 2rem;
  grid-gap: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 428px) {
    grid-template-columns: 1fr;
  }
`;

const InputContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 50px;
  align-items: center;
  text-align: center;
  @media (max-width: 428px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 5px;
  margin: 15px;
  border-radius: 10px;
  height: 50px;
`;
const DateTitleDiv = styled.div`
  text-align: center;
  justify-content: center;

  h1 {
    font-size: 5rem;
    color: white;
    font-weight: 400;
    font-family: "Nunito", sans-serif;
    text-decoration: underline;
  }
`;

const LoadingText = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  font-size: 5rem;
  color: white;
  font-weight: 400;
  font-family: "Nunito", sans-serif;
  top:50%;
`;
