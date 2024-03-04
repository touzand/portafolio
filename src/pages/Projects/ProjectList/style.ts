import styled from 'styled-components'

export const Wrapper = styled.figure`
max-width:700px;
margin:auto;
display:grid;
  gap:.5rem;
margin-bottom:5vh;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 5px;
  grid-auto-flow: row;

  *{
    margin:0;
  }

article{
  padding:1rem;
  flex:1;
  background-color:#0001;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:150px;

div:nth-child(1){
  display:flex;
  flex-direction:column;
  position:relative;

  a:nth-child(1){
    font-weight:bold;
  }
}

a{
    text-decoration:underline;
}


  &:hover{
    color:var(--white-primal-color);
    background-color:var(--black-third-color);
  }
}

//figure{
  //display:flex;
  //justify-content:space-between;
  //padding:1rem 0;
//}

//div:nth-child(1){
  
  //a{
    //font-weight:bold;
    //font-size:var(--step-1);
    //margin-bottom:1rem;
    //display:inline-block;
  //}

  //p{
    //font-size:var(--step--1);
  //}
//}

//div:nth-child(2){
  //display:flex;
  //flex-direction:column;
  //align-items:end;
  //justify-content:space-between;
  //width:100%;

  //span{
    //display:inline;
  //}
}
`
