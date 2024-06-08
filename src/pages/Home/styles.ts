import styled from "styled-components";

export const IntroMainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 544px;
  justify-content: space-between;
`;

export const IntroTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["title"]};
  font-weight: bold;
  font-size: 3rem;
  width: 588px;
  line-height: 1.3;
`;

export const IntroSubtitle = styled.p`
  font-size: 1.25rem;
  height: 52px;
  margin-top: 1.25rem;
`;

export const IntroItemsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2.5rem;
  align-self: start;
  column-gap: 2.5rem;
`;

export const IntroIconBase = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  svg {
    line-height: 0;
  }
`;

export const IntroShoppingCartIcon = styled(IntroIconBase)`
  background: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["background"]};
`;

export const IntroItems = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  line-height: 1.3;
`;

export const IntroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.75rem;
  height: 22.5rem;
`;

export const CoffeeCardGridTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 2rem;
  line-height: 1.3;
  margin-bottom: 3.375rem;
`;

export const CoffeeCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  width: 29.75rem;
`;
