import React from "react";

import { Button } from "antd";
import { PageTitle } from "../components";

export function Home() {
  return (
    <div>
      <PageTitle
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
      <h1>Hola este es el home</h1>
      <Button>Holis</Button>
    </div>
  );
}
