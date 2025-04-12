import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 1150px;
  margin: auto;
  margin-bottom: 40px;

  @media (min-width: 700px) {
    justify-content: space-between;
  }
`;

export const Me = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  figure {
    width: 64px;
    border-radius: 15%;
    overflow: hidden;
  }

  a {
    font-size: var(--step-1);
    font-weight: bold;
  }

  div {
    font-size: var(--step-0);
    font-weight: unset;
  }
`;

export const Navbar = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    text-align: center;
  }

  li {
    padding: 0 1rem;
    font-size: var(--step--1);
    font-weight: 500;
    color: var(--grey-second-color);

    display: inline-block;
  }

  span {
    pointer-events: none;
  }

  .active {
    color: var(--black-third-color);
  }
`;

export const LinkForNavbar = styled.li`
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
