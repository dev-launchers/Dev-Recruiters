import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  margin: 1rem;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
export const Input = styled.input<{ height?: string; width?: string }>`
  background-color: ${({ theme }) => theme.colors.SilverSand};
  height: ${({ height }) => height || "auto"};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 0.5rem;
  width: ${({ wi }) => wi || "40%"};
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const TextArea = styled.textarea.attrs({ wrap: "hard" })`
  background-color: ${({ theme }) => theme.colors.SilverSand};
  height: 175.5px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding: 0.5rem;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Radio = styled.input.attrs({ type: "radio" })`
  margin: 0.5rem;
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin: 0.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex 1;
  flex: ${({ fx }) => fx || "1"};
  flex-direction: column;
  align-items: flex-start;
`;
export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.BlackCoral};
  @media (max-width: 768px) {
    width: 80%;
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

export const ToolTip = styled.div`
  background-color: ${({ theme }) => theme.colors.Black};
  border-radius: 30px;
  margin-bottom: 1rem;
  margin-left: 1rem;
  flex: 1 2;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.normal};
`;

export const FileUpload = styled.input.attrs({ type: "file" })`
  margin-top: 1.25rem;
  color: ${({ theme }) => theme.colors.OuterSpace};
  background-color: ${({ theme }) => theme.colors.SilverSand};
  border-radius: 30px;
  width: 40%;
`;

export const Statement = styled.p`
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
export const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-left: 1rem;
`;

export const SubmitButton = styled.button.attrs({ type: "submit" })`
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 30px;
  padding: 0.5rem;
  width: 15%;
  color: ${({ theme }) => theme.colors.Black};
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
