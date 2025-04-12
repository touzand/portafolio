import styled from 'styled-components';
import {motion} from 'framer-motion'

export const Wrapper = styled(motion.main)`
  h3 {
    text-align: center;
  }

  div {
    flex-direction: column;
    gap: 2rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    max-width: 950px;
    margin:5vh auto;
  }
`;

export const InfoWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  * {
    margin: 0;
  }
`;
