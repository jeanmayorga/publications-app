import React from "react";
import styled from "styled-components";
import { Title } from "../common";
import { ListOfAuthors } from "../ListOfAuthors";

const SideBarStyled = styled.aside`
  background: "#eee";
`;

export function SideBar() {
  return (
    <SideBarStyled>
      <Title size="normal">Authores</Title>
      <ListOfAuthors />
    </SideBarStyled>
  );
}
