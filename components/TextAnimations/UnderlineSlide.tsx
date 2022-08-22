import styled from "styled-components";


import React, { ReactNode } from 'react'

type Props = {
    active?: boolean;
    children: React.ReactNode;
}

function UnderlineSlide( props : Props) {



 const UnderlineSlideStyled = styled.div`
  --c: white; /* the color  */
  --h: 1.2em; /* the height */

  line-height: var(--h);
  background: linear-gradient(var(--c) 0 0) no-repeat calc(200% - var(--_p, 0%))
    100%/200% var(--_p, 0.08em);
  color: #fff;
  overflow: hidden;
  text-shadow: 0 calc(-1 * var(--_t, 0em)) var(#334454),
    0 calc(var(--h) - var(--_t, 0em)) #fff;
  transition: 0.3s var(--_s, 0s),
    background-position 0.3s calc(0.3s - var(--_s, 0s));
    padding: 3px;

    ${props.active ? 
    `--_t: var(--h);
    --_p: 100%;
    --_s: 0.3s;
    color: #334454;` : ''}

  &:hover {
    --_t: var(--h);
    --_p: 100%;
    --_s: 0.3s;
    color: #334454;
    cursor: pointer;
  }
`;
  return (
    <UnderlineSlideStyled>
        {props.children}
    </UnderlineSlideStyled>
  )
}

export default UnderlineSlide
