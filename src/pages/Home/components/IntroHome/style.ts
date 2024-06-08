import styled from "styled-components";

export const IntroMainWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 544px;
  justify-content: space-between;
`;

export const IntroMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.75rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["title"]};
    font-weight: bold;
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
    height: 52px;
    margin-top: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  margin-top: 4rem;
  align-self: start;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  width: 35rem;
`;

export const IntroItems = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["base-text"]};
`;

export const IntroIconBase = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  margin-right: 0.75rem;
  color: ${(props) => props.theme["background"]};
`;

export const IntroShoppingCartIcon = styled(IntroIconBase)`
  background: ${(props) => props.theme["yellow-dark"]};
`;

export const IntroPackageIcon = styled(IntroIconBase)`
  background: ${(props) => props.theme["base-text"]};
`;

export const IntroTimerIcon = styled(IntroIconBase)`
  background: ${(props) => props.theme["yellow"]};
`;

export const IntroCoffeeIcon = styled(IntroIconBase)`
  background: ${(props) => props.theme["purple"]};
`;

export const IntroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.75rem;
  height: 22.5rem;
`;
