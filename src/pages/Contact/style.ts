import styled, {css} from 'styled-components';
import {motion} from 'framer-motion'

export const Wrapper = styled(motion.main)`
  max-width: 700px;
  margin: 10vh auto;
  border-radius: 1rem;
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

  input[type='text'], input[type='email'] {
    border: none;
    background-color: transparent;
    border-bottom: solid thin var(--grey-second-color);
    //color: var(--grey-second-color);
    //width:400px;
    height: ;
    font-weight: bold;
    font-size: var(--step-2);
    margin-bottom: -5px;
      opacity: 0.5;

    &::placeholder {
      font-weight: bold;
      font-size: var(--step-2);
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
      //color: var(--white-primal-color);
      
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const StatusSendMessage = styled.span`
  font-size: var(--step-2);
  font-weight: bold;
  margin-top: 5vh;
  padding: 0.5rem;
    border: dashed medium var(--black-third-color);
  ${props =>
    props.$success &&
    css`
      background-color: green;
      color: var(--white-primal-color);
    border:none;
    `};
`;
