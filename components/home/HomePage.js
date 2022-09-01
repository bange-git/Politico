import React from 'react';
import Image from 'next/image';
import { Banner, Title3, Button, LeadSection } from './Home.style';
import { Title, Container,Card, Grid } from '../about/AboutPage.style';

const HomePage = () => {
  return (
   <Container>
    <Banner>
       <Title>Best of Politico</Title>
       <p>With Politico, Every vote counts!!!. Register Today to make your voice head. Every vote counts!!!. Register Today to make your voice head..</p>
       <Button>Register Now</Button>
    </Banner>
    <LeadSection>
      <Title3>OUR SERVICES</Title3>
      <p>We ensure transparency and equality. this will be the first of it's kind. Every vote counts!!!. Register Today to make your voice head</p>
    </LeadSection>
    <Grid>
    <Card>
      <Image src='/images/bio.jpg' width={300} height=  {300} />
      <h4>We Equip </h4>
      <p>It is with great delight that we have developed such a robust system for the betterment of our country and for transparency.</p>
    </Card>
    <Card>
      <Image src='/images/2.jpg' width={300} height=  {300} />
      <h4>We Serve </h4>
      <p>It is with great delight that we have developed such a robust system for the betterment of our country and for transparency.</p>
    </Card>
    <Card>
      <Image src='/images/3.jpg' width={300} height=  {300} />
      <h4>We Challenge the Statu quo </h4>
      <p>It is with great delight that we have developed such a robust system for the betterment of our country and for transparency.</p>
    </Card>
    </Grid>
  </Container>
  )
}

export default HomePage