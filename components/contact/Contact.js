import React, {useState} from 'react';
import { FlexContact, InputField, Form, FormGroup, FormCard, Label, TextArea, SubmitButton } from './contact.style';
import { Card, Container, Grid } from '../about/AboutPage.style';
import { Title3 } from '../home/Home.style';


const Contact = () => {

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage ] = useState('');
  const [userList, setUserList] = useState([]);

  const user = {first, last, email, message};

  const submitHandler = (e) => {

    e.preventDefault();
    setUserList([...userList, user]);
    setFirst('');
    setLast('');
    setEmail('');
    setMessage('');

  }

  console.log(userList);

  return (
   <>
    <Container>
    <FlexContact>
      <FormCard>
         <Form>
           <FormGroup>
            <Label>First Name</Label>
            <InputField
             type='text'
             placeholder='Enter First Name'
             value={first}
             onChange={(e) => setFirst(e.target.value)}
            >
            </InputField>
            </FormGroup>
            <FormGroup>
            <Label>Last Name</Label>
            <InputField
             type='text'
             placeholder='Enter Last Name'
             value={last}
             onChange={(e) => setLast(e.target.value)}
            >
            </InputField>
            </FormGroup>
            <FormGroup>
            <Label>Email</Label>
            <InputField
             type='text'
             placeholder='Enter Email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            >
            </InputField>
            </FormGroup>
            <FormGroup>
            <Label>Message</Label>
            <TextArea rows='8' cols='10' placeholder='enter yoour message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ></TextArea>
            </FormGroup>
            <FormGroup>
            <SubmitButton onClick={submitHandler}>Send Message</SubmitButton>
            </FormGroup>
         </Form>
      </FormCard>

    </FlexContact>
   
    
  </Container>
  <Grid style={{backgroundColor:'gray'}}>
  { userList.map((user, index) =>{
    return (
     <Card key={index}>
     <Title3>User Info</Title3>
     <p>{user.first}{' '} {user.last}</p>
     <span>{user.email}</span>
     <p>{user.message}</p>

   </Card>
    )
   })}
   </Grid>
</>
  )
}

export default Contact