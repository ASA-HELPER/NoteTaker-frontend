import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react'
import '../App.css'
import { Box, VStack } from "@chakra-ui/react";
import login from '../assets/LoginImg.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from '../constants/config';

export default function LoginPage(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const navigate = useNavigate()
    const handleRegister = async ()=>{
        let data = await axios.post(BASE_URL+"/user/register",{name,email,password})
        let {message,status} = data.data
        if(status==1)
        {
            alert(message)
            navigate("/login")
        }
        else
        {
            alert(message)
        }
    }
    return(
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Create a new account</Heading>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Button onClick={handleRegister} colorScheme={'blue'} variant={'solid'}>
              Register
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={login}
          h={400}
          position={"absolute"}
          top={100}
          right={50}
          className='flex-resp'
        />
      </Flex>
    </Stack>
    )
}