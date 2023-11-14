import { ReactNode } from 'react';

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT } from '../../../Redux/users/user.types'
import Logo from '../../../assets/Logo.PNG'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  return (
    <>
      <Box zIndex={1000} position={"fixed"} w={"100%"} boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"} bg={"seagreen"} px={4} top={0}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box cursor={"pointer"} onClick={()=>{navigate("/")}}><Image src={Logo} h={10} w={10} borderRadius={20}/></Box>

          <Flex alignItems={'center'}>
            <Stack alignItems={"center"} direction={'row'} spacing={7}>
              <Button display={auth?"block":"none"} bg={"#182848"} color={"seagreen"} onClick={()=>{navigate("/notes")}}>All Notes</Button>
              <Button display={auth?"none":"block"} bg={"#182848"} color={"seagreen"} onClick={()=>{navigate("/login")}}>Login</Button>
              <Button display={auth?"none":"block"} bg={"#182848"} color={"seagreen"} onClick={()=>{navigate("/register")}}>SignUp</Button>
              <Button bg={"#182848"} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon color={"seagreen"} /> : <SunIcon color={"seagreen"} />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  border={"2px solid #182848"}
                  padding={2}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0} display={auth?"block":"none"}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList display={auth?"block":"none"} alignItems={'center'} bg={"#182848"} color={"seagreen"}>
                  <MenuItem onClick={()=>{dispatch({type:LOGOUT})}} fontWeight={500}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}