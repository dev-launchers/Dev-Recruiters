import React from "react";
import {
  Header,
  MessageWrapper,
  Wrapper,
  Message,
  Button,
} from "./styledConfirmationPage";
import { useRouter } from "next/router";
export default function ConfirmationPage() {
  const router = useRouter();
  return (
    <Wrapper>
      <Header>Apply with Dev Launchers!</Header>
      <MessageWrapper>
        <Message>Thank you for applying to Dev Launchers!</Message>

        <Message>
          Your application has been sent to the product owner and is now in
          review. After the product owner reviews your application they will
          reach out through the email address you have provided.
        </Message>
        <Button onClick={() => router.push("/")}>
          Return to Recruiting Main Page
        </Button>
      </MessageWrapper>
    </Wrapper>
  );
}
