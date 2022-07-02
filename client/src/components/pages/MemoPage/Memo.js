import React from "react";
import { Card, Button } from "antd";

function Memo({ props }) {
  const onClickHandler = () => {};
  return (
    <Card
      style={{
        marginTop: 20,
        width: "70%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div>{props.memo}</div>
          <div>작성자 : {props.writer.name}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>응원 수 : {props.cheer}</div>
          <Button onClick={onClickHandler}>응원하기</Button>
        </div>
      </div>
    </Card>
  );
}

export default Memo;
