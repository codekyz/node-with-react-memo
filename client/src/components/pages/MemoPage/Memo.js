import React, { useEffect, useState } from "react";
import { Card, Button, Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { requestUpdateMemo } from "../../../redux/memoSlice";
import {
  requestCancelCheer,
  requestCheer,
  requestSearchCheer,
} from "../../../redux/cheerSlice";
import axios from "axios";

function Memo({ props, index }) {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState([]);
  const [updateToggle, setUpdateToggle] = useState(false);
  const [updateValue, setUpdateValue] = useState(props.memo);

  useEffect(() => {
    if (props) {
      const body = {
        user: user.userData._id,
        memo: props._id,
      };
      dispatch(requestSearchCheer(body)).then((response) => {
        if (response.payload.success) {
          let newArr = isClicked.concat((isClicked[index] = true));
          setIsClicked(newArr);
        } else {
          let newArr = isClicked.concat((isClicked[index] = false));
          setIsClicked(newArr);
        }
      });
    }
  }, [props]);

  const onClickHandler = () => {
    const body = {
      user: user.userData._id,
      memo: props._id,
    };

    if (isClicked[index]) {
      dispatch(requestCancelCheer(body)).then((response) => {
        if (response.payload.success) {
          dispatch(requestUpdateMemo(body)).then((response) => {
            if (response.payload.success) {
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
      dispatch(requestCheer(body)).then((response) => {
        if (response.payload.success) {
          dispatch(requestUpdateMemo(body)).then((response) => {
            if (response.payload.success) {
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

  const onDeleteHandler = () => {
    const body = {
      id: props._id,
    };
    axios.post("/api/memos/delete", body).then((response) => {
      if (response.data.success) {
        alert("삭제 성공");
      } else {
        alert("삭제 실패");
      }
    });
  };

  const onUpdateHandler = () => {
    setUpdateToggle(!updateToggle);
  };

  const onUpdateSubmitHandler = () => {
    const body = {
      memo: props._id,
      memoValue: updateValue,
    };

    axios.put("/api/memos/update", body).then((response) => {
      console.log(body, response);
      if (response.data.success) {
        alert("수정 성공");
      } else {
        alert("수정 실패");
      }
    });
  };

  const onUpdateMemoHandler = (event) => {
    setUpdateValue(event.currentTarget.value);
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
          {updateToggle ? (
            <Form
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
              }}
              onFinish={onUpdateSubmitHandler}
            >
              <Input
                type="text"
                value={updateValue}
                onChange={onUpdateMemoHandler}
              />
              <Button htmlType="submit">수정</Button>
            </Form>
          ) : (
            <div>{props.memo}</div>
          )}
          <div>작성자 : {props.writer.name}</div>
          {user.userData._id === props.writer._id && (
            <div>
              <Button onClick={onUpdateHandler}>수정하기</Button>
              <Button onClick={onDeleteHandler}>삭제하기</Button>
            </div>
          )}
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

export default Memo;
