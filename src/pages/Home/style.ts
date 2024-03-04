import styled from 'styled-components';
import {motion} from 'framer-motion'

export const Wrapper = styled(motion.main)`
max-width:900px;
margin:auto;

  >div{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;

    article{
      width:400px; !important
    }
  }
`;

export const Intro = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 10vh 0;

  span {
    font-size: var(--step-2);
    color: var(--black-third-color);
    font-weight: bold;
  }

  h1 {
    font-size: var(--step-3);
    margin: 0;
    line-height: 1.2;
  }
`;

export const Objetive = styled.article`
  margin-bottom: 10vh;

  b {
    color: var(--black-third-color);
  }

  span {
    //color: var(--grey-second-color);
    font-size: var(--step--1);
  }
`;
