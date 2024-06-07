import styled from "styled-components";

export const LayoutContainer = styled.div`
  padding: 2rem 10rem;

  background: ${(props) => props.theme["gray-100"]};

  display: flex;
  flex-direction: column;
`;
