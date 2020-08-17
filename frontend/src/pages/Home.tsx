import React from "react";
import { Link } from "react-router-dom";


export function Home() {
  return (
    <div>
      <h1>Hi, Welcome to Publications App.</h1>
      <div>
        <Link to="/publications">View Publications</Link>
      </div>
    </div>
  );
}
