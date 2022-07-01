import React from "react";

function Memo({ props }) {
  return (
    <div
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        width: 650,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>{props.memo}</div>
      <div>작성자 : {props.writer.name}</div>
    </div>
  );
}

export default Memo;
