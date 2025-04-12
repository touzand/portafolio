import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.main)`
  max-width: 700px;
  margin: 10vh auto;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  * {
    margin: 0;
  }

  input {
    padding: 0;
  }

  input[type="text"],
  input[type="email"] {
    border: none;
    background-color: transparent;
    border-bottom: solid thin #00000050;
    height:;
    font-weight: bold;
    font-size: var(--step-2);
    margin-bottom: -5px;
color:black;

    &::placeholder {
      font-weight: bold;
      font-size: var(--step-2);
color:#00000030;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    color: var(--grey-second-color);
    border: dashed medium transparent;
    cursor: pointer;
    background-color: transparent;
    font-size: var(--step-2);
    font-weight: bold;
    padding: 0.5rem;
    margin-top: 5vh;

    &:hover {
      color: var(--black-third-color);
      border-color: var(--black-third-color);
    }
    
@media (max-width:600px){
width:100%;
      color: var(--black-third-color);
      border-color: var(--black-third-color);
}
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
  }
`;

export const StatusSendMessage = styled.span<{$success?:boolean}>`
  font-size: var(--step-2);
  font-weight: bold;
  margin-top: 5vh;
  padding: 0.5rem;
  border: dashed medium var(--black-third-color);
  ${(props) =>
    props.$success &&
    css`
      background-color: green;
      color: var(--white-primal-color);
      border: none;
    `};
`;
