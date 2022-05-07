import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: ${({ theme }) => theme.fonts.small};
`;
export const Label = styled.label`
  margin: 1rem;
`;
export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.SilverSand};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 0.5rem;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin: 0.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.BlackCoral};
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.fonts.small};
  background-color: ${({ theme }) => theme.colors.SilverSand};
  border-radius: 1.875rem;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const Slider = styled.input.attrs({ type: "range" })`
  background-color: ${({ theme }) => theme.colors.SilverSand};
  border-radius: 30px;
  padding: 0.5rem;
  width: 40%;
  margin-bottom: 1.25rem;
`;

export const FileUpload = styled.input.attrs({ type: "file" })`
  margin-top: 1.25rem;
  color: ${({ theme }) => theme.colors.OuterSpace};
  background-color: ${({ theme }) => theme.colors.SilverSand};
  border-radius: 30px;
  width: 40%;
`;

export const Statement = styled.p``;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 30px;
  padding: 0.5rem;
  width: 15%;
  color: ${({ theme }) => theme.colors.Black};
  cursor: pointer;
`;
