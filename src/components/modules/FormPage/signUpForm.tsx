import React from "react";
import { FormikHelpers, useFormik } from "formik";
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
} from "./styledSignupForm";
import { useState } from "react";

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
  skills: string;
  commitment: number;
  additionalInfo: string;
  resumeUrl: string;
  experience: string;
  reason: string;
  accepted: boolean;
  zip: number;
  role: string;
  id: string;
  project: string;
}

export default function SignUpForm() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    username: Yup.string().required("Username is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    age: Yup.number().required("Age is Required"),
    skills: Yup.string().required("Skills are Required"),
    commitment: Yup.number().required("Commitment is Required"),
    additionalInfo: Yup.string().required("Additional Info is Required"),
    experience: Yup.string().required("Experience is Required"),
    reason: Yup.string().required("Reason is Required"),
    accepted: Yup.boolean().required("Acceptance is Required"),
  });
  const router = useRouter();
  const [FormProps, setFormProps] = useState({
    commitment: 0,
  });
  const { userData } = useUserDataContext();
  const Formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      age: 0,
      skills: "",
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
    },
    onSubmit: (
      values: FormProps,
      { setSubmitting }: FormikHelpers<FormProps>
    ) => {
      setSubmitting(true);
      axios
        .post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/applicants`,
          {
            ...values,
            skills: values.skills.split(",").map((skill) => ({ skill: skill })),
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
          if (res.status === 200) {
            setSubmitting(false);
            router.push("/confirmation");
          }
          setSubmitting(false);
          console.log(res);
        })
        .catch((error) => {
          setSubmitting(false);
          console.log(error);
          console.log(error.response);
          console.log(error.response.data);
          console.log(error.response.status);
        });
    },
    validationSchema: SignupSchema,
  });
  // if (userData.id == 0) {
  //   router.push("/login");
  // } else {
  return (
    <form onSubmit={Formik.handleSubmit}>
      <Column>
        <Label>
          Your Full Legal Name <br />
          Why do I need to enter my full legal name?
          <br />
          At Dev Launchers part of our on-boarding process involves a background
          check as a precaution to keep our members safe!
        </Label>

        <Input id="name" name="name" onChange={Formik.handleChange} />
        {Formik.errors.name && Formik.touched.name ? (
          <ErrorMsg>{Formik.errors.name}</ErrorMsg>
        ) : null}
        <Label>
          Discord Name
          <br />
          Why do I need to enter my Discord name?
          <br />
          We use Discord to connect with our members and to provide feedback on
          their progress.
        </Label>

        <Input id="username" name="username" onChange={Formik.handleChange} />
        {Formik.errors.username && Formik.touched.username ? (
          <ErrorMsg>{Formik.errors.username}</ErrorMsg>
        ) : null}
        <Label>Your Email</Label>

        <Input
          id="email"
          name="email"
          type="email"
          onChange={Formik.handleChange}
        />
        {Formik.errors.email && Formik.touched.email ? (
          <ErrorMsg>{Formik.errors.email}</ErrorMsg>
        ) : null}
        <Label>What is your Age?</Label>
        <Input id="age" name="age" onChange={Formik.handleChange} />
        {Formik.errors.age && Formik.touched.age ? (
          <ErrorMsg>{Formik.errors.age}</ErrorMsg>
        ) : null}
        <Label>
          What are your Skills? <br />
          (Please enter skills separated with a comma and a space)
        </Label>

        <Input id="skills" name="skills" onChange={Formik.handleChange} />
        {Formik.errors.skills && Formik.touched.skills ? (
          <ErrorMsg>{Formik.errors.skills}</ErrorMsg>
        ) : null}
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
              onChange={Formik.handleChange}
            />
          </Row>

          <Row>
            <Label htmlFor="intermediate">Intermediate</Label>
            <Radio
              name="level"
              id="intermediate"
              value={Level[2]}
              onChange={Formik.handleChange}
            />
          </Row>
          <Row>
            <Label htmlFor="advanced">Advanced</Label>
            <Radio
              id="advanced"
              name="level"
              value={Level[3]}
              onChange={Formik.handleChange}
            />
          </Row>
        </RadioWrapper>
        <Label>How many hours are you looking to commit per week?</Label>
        {Formik.errors.commitment && Formik.touched.commitment ? (
          <ErrorMsg>{Formik.errors.commitment}</ErrorMsg>
        ) : null}
        <div id="commitment">
          <Slider
            min={0}
            max={10}
            onChange={(value) => setFormProps({ commitment: value })}
            prefix="hrs"
          />
        </div>
        <Label>
          Please briefly describe any relevant experience you have in
          development or design.
        </Label>
        <TextArea
          id="experience"
          name="experience"
          onChange={Formik.handleChange}
        />
        {Formik.errors.experience && Formik.touched.experience ? (
          <ErrorMsg>{Formik.errors.experience}</ErrorMsg>
        ) : null}
        <Label>
          Why would you like to be a Dev Launcher/ Volunteer? <br />
          (This can help us guide you to meet your goals!)
        </Label>
        <TextArea id="reason" name="reason" onChange={Formik.handleChange} />
        {Formik.errors.reason && Formik.touched.reason ? (
          <ErrorMsg>{Formik.errors.reason}</ErrorMsg>
        ) : null}
        <Label>Anything else you want to share with us?</Label>
        <TextArea
          id="additionalInfo"
          name="additionalInfo"
          onChange={Formik.handleChange}
        />
        {Formik.errors.additionalInfo && Formik.touched.additionalInfo ? (
          <ErrorMsg>{Formik.errors.additionalInfo}</ErrorMsg>
        ) : null}
        <Label> Optional - Upload your Resume or Portfolio</Label>
        <Row>
          <Label> Link from the Web </Label>
          <Input
            id="resumeUrl"
            name="resumeUrl"
            onChange={Formik.handleChange}
          />
        </Row>
        <Statement>
          I understand that all members are expected to attend weekly meetings
          and honor commitments they have made when joining a product team. If
          for any reason you have a conflict in your schedule to attend any of
          your commitments please let your team lead know within a reasonable
          time frame so that they may adjust the plan and reassign the tasks.
        </Statement>
        <Row>
          <Checkbox
            id="accepted"
            name="accepted"
            onChange={Formik.handleChange}
          />
          <Label>I Understand</Label>
        </Row>
        {Formik.errors.accepted && Formik.touched.accepted ? (
          <ErrorMsg>{Formik.errors.accepted}</ErrorMsg>
        ) : null}
        <SubmitButton type="submit">Submit</SubmitButton>
      </Column>
      <Column />
    </form>
  );
  // }
}
