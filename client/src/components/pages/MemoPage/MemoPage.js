import React, { useState } from "react";
import Auth from "../../../hoc/auth";

function MemoPage() {
  const [memo, setMemo] = useState("");

  const onMemoHandler = (event) => {
    event.preventDefault();
    setMemo(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        paddingTop: "100px",
      }}
    >
      <h3>메모를 등록하세요</h3>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
        }}
        onSubmit={onSubmitHandler}
      >
        <input type="text" value={memo} onChange={onMemoHandler} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default Auth(MemoPage, true);
