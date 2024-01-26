import React from "react";
import { post } from "../log/request";

function Home() {
  function postSomething() {
    post();
  }
  return (
    <div>
      <button onClick={() => postSomething()}>POST</button>
    </div>
  );
}

export default Home;
