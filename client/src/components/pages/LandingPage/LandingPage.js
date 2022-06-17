import React, { useEffect, useState } from "react";
import axios from "axios";
import Auth from "../../../hoc/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function LandingPage() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (user.isAuth) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user.isAuth]);

  const onClickHandler = () => {
    if (!user.isAuth) {
      navigate("/login");
    } else {
      axios.get("/api/users/logout").then((response) => {
        if (response.data.success) {
          navigate("/login");
        } else {
          alert("로그아웃 실패");
        }
      });
    }
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
      }}
    >
      <h2>시작 페이지</h2>

      <button onClick={onClickHandler}>{isLogin ? "LogOut" : "LogIn"}</button>
    </div>
  );
}

export default Auth(LandingPage, null);
