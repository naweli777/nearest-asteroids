import styled from "styled-components";

export const Container = styled.div`
  justify-content:center;
  display:flex;
  padding:10rem;
  margin:auto
  align-items:center;
  position: relative;

`
export const Card = styled.div`
  width: 70%;
  height: 100%;
  background: linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%);
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 1rem;
  cursor: pointer;
  h1 {
    font-size: 4rem;
    color: black;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 400;
  }
`;

export const ButtonDiv = styled.div`
  justify-content:center;
  margin:auto
  align-items:center;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

`
