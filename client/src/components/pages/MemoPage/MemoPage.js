import React, { useEffect, useState } from "react";
import Auth from "../../../hoc/auth";
import { Typography, Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Memo from "./Memo";

const { Title } = Typography;

function MemoPage() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [memo, setMemo] = useState("");
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    axios.post("/api/memos/data").then((response) => {
      if (response.data.success) {
        setMemos(response.data.memoInfo);
      } else {
        alert("메모를 가져오는데 실패했습니다.");
      }
    });
  }, []);

  const onMemoHandler = (event) => {
    setMemo(event.currentTarget.value);
  };

  const onSubmitHandler = () => {
    if (!memo) {
      return alert("내용을 입력해주세요.");
    }

    // 서버에 채운 값들을 request로 보낸다

    const body = {
      // 로그인된 사람의 정보
      writer: user.userData._id,
      memo: memo,
    };

    axios.post("/api/memos", body).then((response) => {
      if (response.data.success) {
        alert("등록 성공");
        navigate("/memo");
      } else {
        alert("등록 실패");
      }
    });
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
          width: "700px",
        }}
        onFinish={onSubmitHandler}
      >
        <Input type="text" value={memo} onChange={onMemoHandler} />
        <Button htmlType="submit">등록</Button>
      </Form>
      {memos.map((item) => (
        <Memo key={item._id} props={item} />
      ))}
    </div>
  );
}

export default Auth(MemoPage, true);
