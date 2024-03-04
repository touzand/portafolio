import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Wrapper = styled(motion.main)`

  >h3{
    text-align:center;
}

  >div{
  display:flex;
  flex-direction:column;
  gap:1rem;
  margin:5vh auto;
  max-width:700px;
    white-space:break-spaces;

  *{
    margin:0;
  }
}

b{
  color:var(--black-third-color);
}

`
