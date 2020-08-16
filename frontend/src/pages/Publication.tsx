import React from "react";

import { PageTitle, Title, Paragraph, DateFormatted } from "../components";
import { AuthorItem } from "../components/AuthorItem/AuthorItem";

export function Publication() {
  const author = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    birthDay: "1980-08-14T06:10:33.518Z",
  };
  return (
    <div>
      <PageTitle onBack={() => null} title="Publication" />
      <Title size="large">Mi publiation</Title>
      <div>
        <DateFormatted date={"1998-08-14T06:10:33.518Z"} />
      </div>
      <AuthorItem author={author} />
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
        voluptatem consequuntur provident debitis placeat, fugit aliquam
        veritatis, ex eius qui repudiandae aliquid eos corrupti nulla ullam
        nesciunt saepe perferendis odio.
      </Paragraph>
    </div>
  );
}
