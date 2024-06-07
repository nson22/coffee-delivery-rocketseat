import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  max-width: 90rem;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 10rem;
  background: ${(props) => props.theme["gray-100"]};
`;
