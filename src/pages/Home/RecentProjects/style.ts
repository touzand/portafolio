import styled from "styled-components";

export const Wrapper = styled.article<{ $haveData: boolean }>`
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
  opacity: ${(props) => (props.$haveData ? "1" : "0")};

  h4 {
    margin-top: 0;
  }
`;

export const Card = styled.figure`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    a {
      font-weight: bold;
      font-size: var(--step-0);
      text-decoration: underline;
    }
  }

  div:nth-child(2) {
    color: var(--grey-second-color);
  }

  * {
    margin: 0;
  }
`;
