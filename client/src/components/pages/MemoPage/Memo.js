import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";

function Memo({ props, index }) {
  const user = useSelector((state) => state.user);
  const [isClicked, setIsClicked] = useState([]);

  useEffect(() => {
    if (props) {
      const body = {
        user: user.userData._id,
        memo: props._id,
      };
      axios.post("/api/cheers/search", body).then((response) => {
        if (response.data.success) {
          let newArr = isClicked.concat((isClicked[index] = true));
          setIsClicked(newArr);
        } else {
          let newArr = isClicked.concat((isClicked[index] = false));
          setIsClicked(newArr);
        }
      });
    }
  }, []);

  const onClickHandler = () => {
    const body = {
      user: user.userData._id,
      memo: props._id,
    };

    if (isClicked[index]) {
      axios.post("/api/cheers/cancel", body).then((response) => {
        if (response.data.success) {
          axios.put("/api/memos/update", body).then((response) => {
            if (response.data.success) {
              alert("응원하기 취소에 성공했습니다.");
            } else {
              alert("메모 업데이트에 실패했습니다.");
            }
          });
        } else {
          alert("응원하기 취소에 실패했습니다.");
        }
      });
    }
    if (!isClicked[index]) {
      axios.post("/api/cheers", body).then((response) => {
        if (response.data.success) {
          axios.put("/api/memos/update", body).then((response) => {
            if (response.data.success) {
              alert("응원하기에 성공했습니다.");
            } else {
              alert("메모 업데이트에 실패했습니다.");
            }
          });
        } else {
          alert("응원하기에 실패했습니다.");
        }
      });
    }
  };
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
          <Button onClick={onClickHandler}>
            {isClicked[index] ? "응원취소" : "응원하기"}
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default React.memo(Memo);
