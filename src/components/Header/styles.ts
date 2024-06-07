import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  nav {
    display: flex;
    gap: 0.5rem;
    
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      }
      }
`;


const BaseButton = styled.button`
        display: flex;
        gap: 0.25rem;
        align-items: center;
        justify-content: center;
        border: 0;
        padding: 0.5rem;
        border-radius: 6px;
        cursor: pointer;
      `;

export const ShoppingCartButton = styled(BaseButton)`
        background: ${(props) => props.theme["yellow-light"]};
        color: ${(props) => props.theme["yellow-dark"]};
      `;

export const CurrentLocationButton = styled(BaseButton)`
        background: ${(props) => props.theme["purple-light"]};
        color: ${(props) => props.theme["purple-dark"]};
        svg {
          color: ${(props) => props.theme["purple"]};
        }
      `;