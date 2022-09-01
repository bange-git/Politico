import Image from 'next/image'
import React from 'react';
import FooterSection  from '../Footer/FooterSection.js';
import Header from '../Header/Header.js';
import { Container, Card, Grid, Main, Title, Description, Img, DIV } from './AboutPage.style.js';


const About = () => {
  return (

    <>
    <Container>
    
       <Main>
          <Image src='/images/3.jpg' width={740} height=  {800} />
          
          <DIV>
          <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Description>
          </DIV>
        
       </Main>

       <Grid>
              <Card><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p></Card>
              <Card><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p></Card>
              <Card><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p></Card>
          </Grid>
    </Container>

 </>
  )
}

export default About