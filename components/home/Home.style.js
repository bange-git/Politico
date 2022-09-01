import styled from "styled-components";
//import img from '../images/2.jpg';
import img from '../../public/images/2.jpg';


export const Banner = styled.div`
margin:0;
padding:0;
width:100%;
height: 450px;
background:gray;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
text-align:center;
background-image: url("../../../images/1.jpg");
background-repeat: no-repeat;
background-size: cover;
color:#fff;
`;

export const Title3 = styled.h2`
line-height: 1.15;
font-size: 2rem;

`;

export const Button = styled.button`

border-radius: 5px;
padding:15px 20px;
background: transparent;
border: 1px solid #fff;
font-weight:bold;
color:#fff;
font-size:1.2rem;

&:hover {
  cursor:pointer;
  background:#003171;
}

`;

export const Flex = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
`;
export const LeadSection = styled.div`
width:100%;
text-align:center;
margin-top:2rem;

`

