import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import classes from './AuthenticationTitle.module.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  export function AuthenticationTitle() {
    const navigate = useNavigate();
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const Successnotify = () => toast("You have been registered successfully");
    const ErrorMessage = () => {
        toast.error("Duplicate Indian Mone!");
      };
    const Errornotify = () => toast("Duplicate Indian Mone");
    const sumbitForm = async () => {
        const senderBody ={
            name:name,
            email:email,
            password:password
        }
        const response = await fetch('http://localhost:8000/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(senderBody)
        })
        const data = await response.json(); // converts server json response to object
        if(data.msg === 'success'){
            console.log(data);
            Successnotify();
            navigate('/shop');
        }
        else if(data.msg !== 'success'){
            console.log(data);
            ErrorMessage();
            navigate('/login');
        }
        
    }
    const updateName = (e) => {
        setName(e.target.value);
    }
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Name" onChange={updateName} placeholder="Your Name" required />
          <TextInput label="Email" onChange={updateEmail} placeholder="you@mantine.dev" required />
          <PasswordInput label="Password" onChange={updatePassword} placeholder="Your password" required mt="md" />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button onClick={sumbitForm} fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
        <ToastContainer/>
      </Container>
    );
  }