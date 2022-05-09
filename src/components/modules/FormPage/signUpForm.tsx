import React, { useState } from "react";
import {
  Form,
  Label,
  Input,
  Checkbox,
  Row,
  CheckboxWrapper,
  CheckboxLabel,
  Slider,
  Statement,
  SubmitButton,
} from "./styledSignupForm";

interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  username: string;
  name: string;
  email: string;
  age: number;
  skills: string;
  beginner: boolean;
  intermediate: boolean;
  advanced: boolean;
  commitment: string;
  additionalInfo: string;
  resumeUrl: string;
  experience: string;
  reason: string;
}

export default function SignUpForm({
  onSubmit,
  name,
  username,
  email,
  age,
  skills,
  commitment,
  experience,
  beginner,
  intermediate,
  advanced,
  additionalInfo,
  resumeUrl,
  reason,
}: FormProps) {
  const [values, setValues] = useState({
    username: "",
    name: "",
    email: "",
    age: 0,
    skills: "",
    beginner: false,
    intermediate: false,
    advanced: false,
    commitment: "",
    additionalInfo: "",
    resumeUrl: "",
    experience: "",
    reason: "",
  });
  const handleUsernameChange = (event) => {
    event.persist();
    setValues({ ...values, username: event.target.value });
  };
  const handleNameChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };
  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleAgeChange = (event) => {
    setValues({ ...values, age: event.target.value });
  };
  const handleSkillsChange = (event) => {
    setValues({ ...values, skills: event.target.value });
  };
  const handleBeginnerChange = (event) => {
    setValues({ ...values, beginner: event.target.value });
  };
  const handleIntermediateChange = (event) => {
    setValues({ ...values, intermediate: event.target.value });
  };
  const handleAdvancedChange = (event) => {
    setValues({ ...values, advanced: event.target.value });
  };
  const handleCommitmentChange = (event) => {
    setValues({ ...values, commitment: event.target.value });
  };
  const handleAdditionalInfoChange = (event) => {
    setValues({ ...values, additionalInfo: event.target.value });
  };
  const handleResumeUrlChange = (event) => {
    setValues({ ...values, resumeUrl: event.target.value });
  };
  const handleExperienceChange = (event) => {
    setValues({ ...values, experience: event.target.value });
  };
  const handleReasonChange = (event) => {
    setValues({ ...values, reason: event.target.value });
  };
  const registerUser = async (event) => {
    const res = await fetch("http://localhost:1337/applicants", {
      method: "POST",
      body: JSON.stringify({
        name,
        username,
        email,
        age,
        skills,
        commitment,
        experience,
        beginner,
        intermediate,
        advanced,
        additionalInfo,
        resumeUrl,
        reason,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
  };
  return (
    <Form>
      <Label>Your Full Legal Name</Label>
      <Input value={name} onChange={handleNameChange} />
      <Label>Discord Name</Label>
      <Input value={username} onChange={handleUsernameChange} />
      <Label>Your Email</Label>
      <Input value={email} onChange={handleEmailChange} />
      <Label>What is your Age?</Label>
      <Input value={age} onChange={handleAgeChange} />
      <Label>What are your Skills?</Label>
      <Input value={skills} onChange={handleSkillsChange} />
      <Label>What is your Level of Skill?</Label>

      <CheckboxWrapper>
        <CheckboxLabel>
          <Label>Please Choose One</Label>
        </CheckboxLabel>
        <Row>
          <Label htmlFor="beginner">Beginner</Label>
          <Checkbox
            id="beginner"
            name="beginner"
            value={beginner}
            onChange={handleBeginnerChange}
          />
        </Row>
        <Row>
          <Label htmlFor="intermediate">Intermediate</Label>
          <Checkbox
            value={intermediate}
            name="intermediate"
            id="intermediate"
            onChange={handleIntermediateChange}
          />
        </Row>
        <Row>
          <Label htmlFor="advanced">Advanced</Label>
          <Checkbox
            id="advanced"
            name="advanced"
            value={advanced}
            onChange={handleAdvancedChange}
          />
        </Row>
      </CheckboxWrapper>
      <Label>How many hours are you looking to commit per week?</Label>
      <Slider
        min="3hrs"
        max="10hrs"
        value={commitment}
        onChange={handleCommitmentChange}
      />
      <Label>
        Please briefly describe any relevant experience you have in development
        or design.
      </Label>
      <Input value={experience} onChange={handleExperienceChange} />
      <Label>
        Why would you like to be a Dev Launcher/ Volunteer? <br />
        (This can help us guide you to meet your goals!)
      </Label>
      <Input value={reason} onChange={handleReasonChange} />
      <Label>Anything else you want to share with us?</Label>
      <Input value={additionalInfo} onChange={handleAdditionalInfoChange} />
      <Label> Optional - Upload your Resume or Portfolio</Label>
      <Row>
        <Label> Link from the Web </Label>
        <Input value={resumeUrl} onChange={handleResumeUrlChange} />
      </Row>
      <Statement>
        I understand that all members are expected to attend weekly meetings and
        honor commitments they have made when joining a product team. If for any
        reason you have a conflict in your schedule to attend any of your
        commitments please let your team lead know within a reasonable time
        frame so that they may adjust the plan and reassign the tasks.
      </Statement>
      <Row>
        <Checkbox />
        <Label>I Understand </Label>
      </Row>
      <SubmitButton onSubmit={registerUser}>Submit</SubmitButton>
    </Form>
  );
}
