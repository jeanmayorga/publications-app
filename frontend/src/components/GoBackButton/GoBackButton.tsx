import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { GoBackButtonStyled } from "./styles";

export function GoBackButton() {
  return (
    <GoBackButtonStyled>
      <ArrowLeftOutlined />
    </GoBackButtonStyled>
  );
}
