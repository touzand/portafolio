import styled, {keyframes} from 'styled-components';
import {motion} from 'framer-motion'

export const Wrapper = styled(motion.main)`
  margin: 5vh auto 10vh auto;
  max-width: 700px;
  white-space: break-word;
  position: relative;

  h2 {
    line-height: 1.2;
    margin: 0 0 16px 0;
    text-align: center;
  }

  .release_date {
    font-size: var(--step--1);
    color: var(--grey-second-color);
    text-align: center;
    display: block;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
  }

  h5 {
    margin-bottom: 1rem;
  }

  blockquote {
    background-color: #0000ff05;
    padding: 0.5rem 1rem;
    border-left: solid thick var(--grey-second-color);

    p::before {
      content: '"';
      font-size: var(--step-5);
      margin-right: 0.25em;
      vertical-align: -0.4em;
      line-height: 0.1em;
    }
  }

  strong {
    background-color: #ddd5;
    padding: 0rem 0.25rem;
    font-weight: unset;
  }

  code {
    font-size: var(--step--1);

    white-space: pre-wrap;
    word-wrap: break-word;
  }

  a {
    text-decoration: underline;
  }

table{
  //text-align:center;


   border-collapse: collapse;
   border-spacing: 0px;
   //background: #000 url("gradient.gif") bottom left repeat-x;
}

th{
  padding:1rem;
  background-color:#0001;
}

th,td{
  border:solid thin #0001;
}

tr:nth-child(even){
  background-color:#0001;
}

td{
  padding:1rem;
}
`;

export const LinkContainer = styled.div`
display:flex;
justify-content:center;
gap:.5rem;
    margin-bottom: 2rem;

  a{
    text-decoration:none;
  padding:.5rem;
  border:solid thin #0001;

    &:hover{
      background-color:#0001
    }
  }
`
