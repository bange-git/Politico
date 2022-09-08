import React from 'react';
import { FooterDiv } from './Footer.style';
import { useSelector } from 'react-redux';
import { selectCount } from '../../features/CounterSlice';

const FooterSection = () => {
  const count = useSelector(selectCount);
  return (
    <FooterDiv>
       <h2>Welcome to Politico{count}</h2>
       <p>Where every vote counts. copyright@2022</p>
    </FooterDiv>
  )
}

export default FooterSection