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
  line-height: 1.6;
`;

export const IntroSubtitle = styled.p`
  font-size: 1.25rem;
  height: 52px;
  margin-top: 1rem;
`

export const IntroItemsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2.5rem;
  align-self: start;
  gap: 1.25rem;
  column-gap: 2.5rem;
`

export const IntroIconBase = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
`;


export const IntroShoppingCartIcon = styled((IntroIconBase))`
  background: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["background"]};
`;


export const IntroItems = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const IntroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.75rem;
  height: 22.5rem;
`


export const CoffeeCard = styled.div`
  height: 19.375rem;
  width: 16rem;
  border-radius: 6px 36px;
  background: ${props => props.theme["base-card"]};
  position: relative;
`

export const CoffeeCardImage = styled.div`
  position: absolute;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  `
export const CoffeeCardContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`

export const CoffeeCardTag = styled.span`
  border-radius: 100px;
  padding:  0.25rem 0.5rem;
  color: ${props => props.theme["yellow-dark"]};
  background: ${props => props.theme["yellow-light"]};
`