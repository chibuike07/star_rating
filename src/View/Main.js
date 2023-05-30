import React from "react";
import Item from "../Component/Item";
import { styled } from "styled-components";

const Main = () => {
  return (
    <Container>
      <Item />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;
