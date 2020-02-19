import * as React from "react";
import styled from "styled-components";

interface Props {
  onClick(): void;
  disabled?: boolean;
}

interface ContainerProps {
  disabled: boolean;
}

const Container = styled.button<ContainerProps>`
  padding: 0px 20px;
  height: 49px;
  border-radius: 2px;
  border: 2px solid #3d5567;
  display: inline-flex;
  background-color: ${props => (props.disabled ? 'red' : 'blue')};
`;

const Span = styled.span`
  margin: auto;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

export const Button:React.FunctionComponent<Props> = ({onClick, children, disabled = false}) => (
  <Container disabled={disabled} onClick={onClick}>
    <Span>{children}</Span>
  </Container>
);
