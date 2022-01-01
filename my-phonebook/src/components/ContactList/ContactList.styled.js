import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  spacing,
  colors: { accentColor },
  transition: { timing, timingFunction },
} = theme;

export const ContastsList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${spacing(4)};
  }
`;

export const ContactNote = styled.span`
  margin-right: ${spacing(3)};
  font-size: 0.85em;
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  transition: text-decoration ${timing} ${timingFunction};

  &:hover,
  &:focus {
    color: inherit;
    outline: 2px solid ${accentColor};
    border-radius: 0.3em;
    outline-offset: 0.3em;
  }
`;
