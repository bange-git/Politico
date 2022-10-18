import React, { useState } from "react";
import {
  FlexContact,
  InputField,
  Form,
  FormGroup,
  FormCard,
  Label,
  TextArea,
  SubmitButton,
  FlexRow,
} from "./contact.style";
import { Card, Container, Grid } from "../about/AboutPage.style";
import { Title3 } from "../home/Home.style";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from "../../features/CounterSlice";
import { getPost, deletePost } from "../../features/PostSlice";
import { useSelector, useDispatch } from "react-redux";
import { signIn, useSession, signOut } from "next-auth/react";

const Contact = () => {
  const { data: session } = useSession();
  console.log(session);
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const { posts, loading } = useSelector((state) => ({ ...state.posts }));
  console.log(posts);
  //console.log(posts[0].body);
  console.log(count);
  const [amount, setAmount] = useState();

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userList, setUserList] = useState([]);
  const [id, setId] = useState();

  console.log(id);
  const user = { first, last, email, message };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!first || !last || !email || !message) return;
    setUserList([...userList, user]);
    setFirst("");
    setLast("");
    setEmail("");
    setMessage("");
  };

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
                  type="text"
                  placeholder="Enter First Name"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                ></InputField>
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <InputField
                  type="text"
                  placeholder="Enter Last Name"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                ></InputField>
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <InputField
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></InputField>
              </FormGroup>
              <FormGroup>
                <Label>Message</Label>
                <TextArea
                  rows="8"
                  cols="10"
                  placeholder="enter yoour message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></TextArea>
              </FormGroup>
              <FormGroup>
                <SubmitButton onClick={submitHandler}>
                  Send Message
                </SubmitButton>
              </FormGroup>
            </Form>
          </FormCard>
        </FlexContact>
      </Container>
      <Grid style={{ backgroundColor: "gray" }}>
        {userList.map((user, index) => {
          return (
            <Card key={index}>
              <Title3>User Info</Title3>
              <p>
                {user.first} {user.last}
              </p>
              <span>{user.email}</span>
              <p>{user.message}</p>
            </Card>
          );
        })}
      </Grid>
      <FlexRow>
        <FormCard>
          <h3>counter is currently at: {count}</h3>
          <InputField
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <SubmitButton onClick={() => dispatch(increment())}>
            increment
          </SubmitButton>
          <SubmitButton onClick={() => dispatch(decrement())}>
            decrement
          </SubmitButton>
          <SubmitButton
            onClick={() => dispatch(incrementByAmount(Number(amount)))}
          >
            incrementByAmount
          </SubmitButton>
        </FormCard>
        <FormCard>
          <FormGroup>
            <InputField
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <SubmitButton
              onClick={() => {
                if (!id) return;
                dispatch(getPost({ id }));
                setId("");
              }}
            >
              Fetch Post
            </SubmitButton>
          </FormGroup>
          {posts.length > 0 && (
            <>
              <h3>
                {posts[0].title} {posts[0].id}
              </h3>
              <p>{posts[0].body}</p>
              <p>
                <button>Edit</button> |{" "}
                <span>
                  <button
                    onClick={() => {
                      dispatch(deletePost(posts[0].id));
                    }}
                  >
                    Delete
                  </button>
                </span>
              </p>
            </>
          )}
        </FormCard>
      </FlexRow>
    </>
  );
};

export default Contact;
