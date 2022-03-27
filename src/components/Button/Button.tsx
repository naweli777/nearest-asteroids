import { FC } from "react";
import {Container} from "./Button.styled"

interface ButtonText
{
    title:string
    onClicked:()=>void
}

const Button: FC<ButtonText> =({title,onClicked}) => {
  return (
    <Container onClick={onClicked}>{title}</Container>
  )
}

export default Button;