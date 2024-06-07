import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.h1`
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["title"]};
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridContainer = styled.div`
  margin-top: 2.5rem;
  align-self: start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`;

export const IconContainer = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  background: ${(props) => props.theme["yellow-dark"]};
  border-radius: 100%;
  color: ${(props) => props.theme["background"]};
`;
