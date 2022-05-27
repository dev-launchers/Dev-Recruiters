import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useUserDataContext } from "@contexts/UserDataContext";
import Slider from "@components/common/Slider";

import {
  Label,
  Column,
  Checkbox,
  Row,
  RadioWrapper,
  CheckboxLabel,
  Statement,
  SubmitButton,
  Input,
  Radio,
  TextArea,
  ErrorMsg,
  ToolTip,
} from "./styledSignupForm";
import { Commitment } from "../DetailedPage/ProductHeader/StyledProductHeader";

enum Level {
  beginner = 1,
  intermediate = 2,
  advanced = 3,
}

interface FormProps {
  username: string;
  name: string;
  email: string;
  age: number;
  skills: Array<string>;
  commitment: number;
  additionalInfo: string;
  resumeUrl: string;
  experience: string;
  reason: string;
  accepted: boolean;
  zip: number;
  role: string;
  id: string;
  project: any;
}

export default function SignUpForm() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    username: Yup.string().required("Username is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    age: Yup.number().required("Age is Required"),
  });
  const router = useRouter();
  const { userData } = useUserDataContext();
  return (
    <Formik
      initialValues={{
        username: "",
        name: "",
        email: "",
        age: 0,
        skills: [],
        accepted: false,
        commitment: 0,
        additionalInfo: "",
        resumeUrl: "",
        experience: "",
        reason: "",
        zip: 0,
        role: router.query.position as string,
        id: router.query.slug as string,
        project: router.query.project,
      }}
      validationSchema={SignupSchema}
      onSubmit={(
        values: FormProps,
        { setSubmitting }: FormikHelpers<FormProps>
      ) => {
        setSubmitting(true);
        axios
          .post(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/applicants`,
            {
              ...values,
              role: router.query.position as string,
              project: router.query.project,
              id: router.query.slug as string,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
          .then((res) => {
            setSubmitting(false);
            console.log(res);
            if (res.status === 200) {
              if (userData.id === 1) {
                router.push("/confirmation");
              } else {
                router.push("/");
              }
            }
          })
          .catch((error) => {
            setSubmitting(false);
            console.log(error);
          });
      }}
    >
      {({ touched, errors, handleChange, handleSubmit }) => (
        <Form>
          <Column>
            <Row>
              <Column wc="50%">
                <Label>Your Full Legal Name</Label>
                {errors.name && touched.name ? (
                  <ErrorMsg>{errors.name}</ErrorMsg>
                ) : null}
                <Input id="name" name="name" onChange={handleChange} wi="80%" />
              </Column>
              <ToolTip>
                Why do I need to enter my full legal name?
                <br />
                <br />
                At Dev Launchers part of our on-boarding process involves a
                background check as a precaution to keep our members safe!
              </ToolTip>
            </Row>

            <Row>
              <Column wc="50%">
                <Label>Discord Name</Label>
                {errors.username && touched.username ? (
                  <ErrorMsg>{errors.username}</ErrorMsg>
                ) : null}
                <Input
                  id="username"
                  name="username"
                  onChange={handleChange}
                  wi="80%"
                />
              </Column>
              <ToolTip>
                Why do I need to enter my Discord name?
                <br />
                <br />
                We use Discord to connect with our members and to provide
                feedback on their progress.
              </ToolTip>
            </Row>
            <Label>Your Email</Label>
            {errors.email && touched.email ? (
              <ErrorMsg>{errors.email}</ErrorMsg>
            ) : null}
            <Input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <Label>What is your Age?</Label>
            <Input id="age" name="age" onChange={handleChange} />
            {errors.age && touched.age ? (
              <ErrorMsg>{errors.age}</ErrorMsg>
            ) : null}
            <Label>What are your Skills?</Label>
            <Input id="skills" name="skills" onChange={handleChange} />
            <Label>What is your Level of Skill?</Label>
            <RadioWrapper>
              <CheckboxLabel>
                <Label>Please Choose One</Label>
              </CheckboxLabel>
              <Row>
                <Label htmlFor="beginner">Beginner</Label>
                <Radio
                  id="beginner"
                  name="level"
                  value={Level[1]}
                  onChange={handleChange}
                />
              </Row>
              <Row>
                <Label htmlFor="intermediate">Intermediate</Label>
                <Radio
                  name="level"
                  id="intermediate"
                  value={Level[2]}
                  onChange={handleChange}
                />
              </Row>
              <Row>
                <Label htmlFor="advanced">Advanced</Label>
                <Radio
                  id="advanced"
                  name="level"
                  value={Level[3]}
                  onChange={handleChange}
                />
              </Row>
            </RadioWrapper>
            <Label>How many hours are you looking to commit per week?</Label>
            <Slider
              min={0}
              max={10}
              id="commitment"
              value={Commitment}
              onChange={handleChange}
            />
            <Label>
              Please briefly describe any relevant experience you have in
              development or design.
            </Label>
            <TextArea
              id="experience"
              name="experience"
              onChange={handleChange}
            />
            <Label>
              Why would you like to be a Dev Launcher/ Volunteer? <br />
              (This can help us guide you to meet your goals!)
            </Label>
            <TextArea id="reason" name="reason" onChange={handleChange} />
            <Label>Anything else you want to share with us?</Label>
            <TextArea
              id="additionalInfo"
              name="additionalInfo"
              onChange={handleChange}
            />
            <Label> Optional - Upload your Resume or Portfolio</Label>
            <Row>
              <Label> Link from the Web </Label>
              <Input id="resumeUrl" name="resumeUrl" onChange={handleChange} />
            </Row>
            <Statement>
              I understand that all members are expected to attend weekly
              meetings and honor commitments they have made when joining a
              product team. If for any reason you have a conflict in your
              schedule to attend any of your commitments please let your team
              lead know within a reasonable time frame so that they may adjust
              the plan and reassign the tasks.
            </Statement>
            <Row>
              <Checkbox />
              <Label id="accepted" name="accepted" onChange={handleChange}>
                I Understand
              </Label>
            </Row>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          </Column>
          <Column />
        </Form>
      )}
    </Formik>
  );
}
