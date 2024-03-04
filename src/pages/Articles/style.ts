import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Wrapper = styled(motion.main)`
  margin:5vh auto;
  max-width:700px;

h3{
  text-align:center;
}

p{
  margin-bottom:2rem;
}

ul li{
  font-size:var(--step--1);
  margin-top:8px;
}

ul li:nth-child(1){
  margin-top:0;
}

a{
  text-decoration:underline;
}
`
