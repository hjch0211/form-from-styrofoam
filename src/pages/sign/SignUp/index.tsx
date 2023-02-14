import React from "react";
import { MainHeader } from "../../../components/organisms";
import { MainLayout } from "../../../components/templates/MainLayout";
import { Typography, Autocomplete, Box, TextField } from "@mui/material";
import { InputControlled as Input } from "../../../components/molecules";
import { useSignUp } from "./hook";
import { Empty, Form } from "../../../components/atoms";
import { SubmitBtn, PwField, InputMulti } from "../../../components/molecules";

const DOMAINS: readonly String[] = ["google.com", "naver.com"];

export const SignUp = () => {
  const { reg, errors, onSubmit } = useSignUp();

  // 1. 사용자 이름을 입력 받음
  // 2. 사용자 아이디를 입력 받음
  // [Todo] 처음에는 최소한의 정보를 받고 추후에 추가 정보를 입력하게끔 설계
  /* [Todo] 여기에서 스텝별로 입력폼 */
  return (
    <>
      <MainHeader />
      <MainLayout>
        <MainLayout.Title>
          <Typography variant="h1">Sign Up</Typography>
        </MainLayout.Title>
        <MainLayout.Body>
          {/* 카드 형태로 영역 구분하면 좋을 것 같음 */}
          {/* step1 - step2 -step3 이런 형식 사용 ㄱㄱ */}
          <Typography>회원 정보를 입력해주세요.</Typography>
          <Empty height="2rem" />
          <Form onSubmit={onSubmit}>
            <Input fullWidth label="NAME" useControllerProps={reg.name} />
            <Empty height="2rem" />
            <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
              <Input label="ID" useControllerProps={reg.id} />
              &nbsp;@&nbsp;
              {/* reg 등록 필요 */}
              <Autocomplete
                sx={{ width: "50%" }}
                freeSolo
                options={DOMAINS}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
                    {option}
                  </Box>
                )}
                disableClearable
                renderInput={(params) => <TextField {...params} label="DOMAIN" />}
              />
            </div>
            <Empty height="2rem" />
            <InputMulti
              names={[reg.password.name, reg.confirmPassword.name]}
              errors={errors}
              style={{ display: "flex" }}
            >
              <PwField label="PASSWORD" useControllerProps={reg.password} />
              &nbsp;
              <PwField label="CONFIRM" useControllerProps={reg.confirmPassword} />
            </InputMulti>
            <Empty height="2rem" />
            <SubmitBtn>회원가입</SubmitBtn>
          </Form>
        </MainLayout.Body>
      </MainLayout>
    </>
  );
};
