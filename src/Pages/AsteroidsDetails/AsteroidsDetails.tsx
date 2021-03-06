import Button from "components/Button/Button";
import { useAsteroidDetailById } from "Queries";
import { useParams } from "react-router-dom";
import { Card, Container,ButtonDiv } from "./AsteroidsDetails.styled";
import { useNavigate } from 'react-router-dom';

const AsteroidsDetails = () => {
  const navigate = useNavigate();
  const { asteroidId } = useParams<{ asteroidId: string }>();
  const { isLoading, data } = useAsteroidDetailById(asteroidId);
  console.log({ isLoading, data });
  return (
    <>
    <Container>
      <Card>
        <h1>Unique Id: {data?.id}</h1>

        <h1>Name: {data?.name}</h1>
        <h1>This is AKA: {data?.name_limited}</h1>
        <h1>
          Estimated max area :{" "}
          {data?.estimated_diameter?.kilometers?.estimated_diameter_max}
        </h1>
        <h1>
          Estimated min area :{" "}
          {data?.estimated_diameter?.kilometers?.estimated_diameter_min}
        </h1>
        <h1>
          Effect on Earth:{" "}
          {data?.is_potentially_hazardous_asteroid
            ? "Destructive"
            : "No Effects"}
        </h1>
      </Card>

    </Container>
    <ButtonDiv>
    <Button title="Back" onClicked={() => navigate(-1)}/>
    </ButtonDiv>

          </>

  );
};

export default AsteroidsDetails;
