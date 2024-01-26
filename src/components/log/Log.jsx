import React from "react";
import "./_log.sass";
import SingField from "./SingField";
import { useAuth } from "../../contect/AuthContext";
import Cookies from "js-cookie";

function Log() {
  const { authToken } = useAuth();
  function lofOut() {
    Cookies.remove("authToken");
  }

  return (
    <div className="container">
      {authToken ? (
        <button onClick={() => lofOut()}>Log out</button>
      ) : (
        <>
          <div className="log-wrap">
            <SingField sing={true} />
          </div>
          <div className="line"></div>
          <div className="log-wrap">
            <SingField sing={false} />
          </div>
        </>
      )}
    </div>
  );
}

export default Log;
