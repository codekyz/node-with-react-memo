import React, { useEffect, useState } from "react";
import Auth from "../../../hoc/auth";
import { Typography, Button, Form, Input, Checkbox } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Memo from "./Memo";
import { requestAllMemo } from "../../../redux/memoSlice";

const { Title } = Typography;

function MemoPage() {
  const user = useSelector((state) => state.user);
  const memo = useSelector((state) => state.memo);
  const dispatch = useDispatch();

  const [memoValue, setMemoValue] = useState("");
  // const [memos, setMemos] = useState({});
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      const body = {
        id: user.userData._id,
      };
      axios.post("/api/memos/mymemo", body).then((response) => {
        if (response.data.success) {
          // setMemos(response.data.myMemos);
        } else {
          alert("내 메모를 가져오는데 실패했습니다.");
        }
      });
    }

    if (!toggle) {
      dispatch(requestAllMemo()).then((response) => {
        if (!response.payload.success) {
          alert("메모를 가져오는데 실패했습니다.");
        }
      });
    }
  }, [toggle, user]);

  const onMemoHandler = (event) => {
    setMemoValue(event.currentTarget.value);
  };

  const onCheckBoxHandler = () => {
    setToggle(!toggle);
  };

  const onSubmitHandler = () => {
    if (!memoValue) {
      return alert("내용을 입력해주세요.");
    }

    // 서버에 채운 값들을 request로 보낸다

    const body = {
      // 로그인된 사람의 정보
      writer: user.userData._id,
      memo: memoValue,
    };

    axios.post("/api/memos", body).then((response) => {
      if (response.data.success) {
        alert("등록 성공");
      } else {
        alert("등록 실패");
      }
    });

    setMemoValue("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingTop: "100px",
      }}
    >
      <Title level={3}>메모를 등록하세요</Title>
      <Form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "70%",
        }}
        onFinish={onSubmitHandler}
      >
        <Input type="text" value={memoValue} onChange={onMemoHandler} />
        <Button htmlType="submit">등록</Button>
      </Form>
      <Checkbox
        style={{ width: "70%" }}
        checked={toggle}
        onClick={onCheckBoxHandler}
      >
        내 메모만 보기
      </Checkbox>
      {memo.allMemo.memoInfo &&
        memo.allMemo.memoInfo.map((item, index) => (
          <Memo key={item._id} props={item} index={index} />
        ))}
    </div>
  );
}

export default Auth(MemoPage, true);
