import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
`;

export const CarouselContainer = styled.div`
  grid-column-start: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #f0f4f9;
`;

export const FormContainer = styled.div`
  grid-column-start: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
