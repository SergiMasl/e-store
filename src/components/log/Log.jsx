import React from "react";
import "./_log.sass";
import SingField from "./SingField";

function Log() {
  return (
    <div className="container">
      <div className="log-wrap">
        <SingField sing={true} />
      </div>
      <div className="line"></div>
      <div className="log-wrap">
        <SingField sing={false} />
      </div>
    </div>
  );
}

export default Log;
