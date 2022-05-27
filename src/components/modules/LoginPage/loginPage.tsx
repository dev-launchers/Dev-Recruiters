import React from "react";
import {
  Header,
  MessageWrapper,
  Wrapper,
  Button,
  ButtonWrapper,
} from "./styledLoginPage";
import { useRouter } from "next/router";
export default function LoginPage() {
  const router = useRouter();
  return (
    <Wrapper>
      <MessageWrapper>
        <Header>Dev Launchers Volunteer Application</Header>
        <ButtonWrapper>
          <Button onClick={() => router.push(`${process.env.GOOGLE_AUTH_URL}`)}>
            Create an account
          </Button>
          <Button onClick={() => router.push(`${process.env.GOOGLE_AUTH_URL}`)}>
            Sign in
          </Button>
        </ButtonWrapper>
      </MessageWrapper>
    </Wrapper>
  );
}
