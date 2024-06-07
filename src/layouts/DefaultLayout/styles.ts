import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 10rem;
  background: ${(props) => props.theme["gray-100"]};
  max-width: 70rem;
`;
