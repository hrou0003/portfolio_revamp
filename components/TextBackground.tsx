import styled from "styled-components";

export const AnimateTextBackground = styled.div`


  background-image: linear-gradient(120deg, slategray, gray);
  color: white;
  padding: 5px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100% 0.5em;
  background-position: 10% 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }

`