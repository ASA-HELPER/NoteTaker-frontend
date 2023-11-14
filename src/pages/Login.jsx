'use client'
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
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/users/user.actions';
import userReducer from './../Redux/users/user.reducer';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
    const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if(auth)
    {
        navigate("/notes")
    }
    const handleLogin = ()=>{
        dispatch(getUser({email,password}))
    }
    return(
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Button onClick={handleLogin} colorScheme={'blue'} variant={'solid'}>
              Sign in
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