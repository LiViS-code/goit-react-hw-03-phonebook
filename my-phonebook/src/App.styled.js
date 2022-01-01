import styled from "styled-components";
import { theme } from "./constants/Theme";

const {
  spacing,
  boxShadow,
  colors: { primaryColor, backgroundColor },
} = theme;

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  width: 85%;
  max-width: 320px;
  min-width: 300px;
  margin: 0 auto;
  padding: ${spacing(5)};
  font-size: 1em;
  border-radius: ${spacing(2)};
  color: ${primaryColor};
  background-color: ${backgroundColor};
  box-shadow: ${boxShadow};
`;

export const Logo = styled.img`
  width: 50px;
  margin-right: ${spacing(2)};
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: ${spacing(4)};
  font-size: 1.8em;
`;

export const ContactsTitle = styled.h2`
  margin-top: 0;
  margin-bottom: ${theme.spacing(4)};
  font-size: 1.4em;
`;

export const Message = styled.p`
  text-align: center;
`;
