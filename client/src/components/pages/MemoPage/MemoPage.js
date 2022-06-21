import React from "react";
import Auth from "../../../hoc/auth";

function MemoPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      MemoPage
    </div>
  );
}

export default Auth(MemoPage, true);
