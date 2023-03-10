import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { MainHeader } from "../../components/organisms";
import { MainLayout } from "../../components/templates/MainLayout";
import { Empty } from "../../components/atoms";
import largeBox from "../../assets/largeBox.png";

export const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainHeader />
      <MainLayout>
        <MainLayout.Body>
          <img src={largeBox} style={{ maxWidth: "20rem", width: "100%" }} />
          <Empty height="1rem" />
          <Typography>원하는 스티로폼을 구매해 보세요</Typography>
          <Empty height="1rem" />
          <Button size="large" variant="outlined" onClick={() => navigate("/sign-in")}>
            Sign in
          </Button>
        </MainLayout.Body>
      </MainLayout>
    </>
  );
};
