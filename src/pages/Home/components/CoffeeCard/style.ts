import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 19.375rem;
  width: 16rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme["base-card"]};
  img {
    margin-top: -1rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const CoffeeCardDescrition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 13.5rem;
  height: 16rem;
`;

export const CoffeeCardTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const CoffeeCardTag = styled.span`
  font-size: 0.625rem;
  line-height: 1.3;
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};
  font-weight: 700;
  margin-top: 0.75rem;
`;

export const CoffeeCardTitle = styled.span`
  font-weight: bold;
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  margin-top: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme["base-subtitle"]};
  width: 13.5rem;
  text-align: center;
`;

export const CoffeeCardTitleDescription = styled.span`
  text-align: center;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: ${(props) => props.theme["base-label"]};
  width: 13.5rem;
`;

export const CoffeeCardPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13rem;
  margin-top: 2rem;
`;

export const CoffeeCardPrice = styled.span`
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["base-text"]};

  small {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.5rem;
  }
`;

export const CoffeeCardQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${(props) => props.theme["base-button"]};
  width: 4rem;
  border-radius: 6px;
  margin: 0 0.5rem 0 1rem;
  height: 2rem;

  button {
    border: 0;
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["purple"]};
    line-height: 0;
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  span {
    text-align: center;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const CoffeeCardAddItem = styled.button`
  border: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme["purple-dark"]};
  line-height: 0;
  color: ${(props) => props.theme["base-card"]};
  cursor: pointer;
`;
