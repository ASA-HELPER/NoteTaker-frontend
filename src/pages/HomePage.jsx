import {Box,Heading,Image, Text} from '@chakra-ui/react'
import { Navbar } from '../components/HomePage/Navbar'
import note from '../assets/note.png'
import '../App.css'
export default function HomePage(){
    return(
        <Box padding={8} className='home-resp'>
            <Heading mt={16} textAlign={"start"} size={"4xl"} color={"seagreen"}>NoteTaker</Heading>
            <Text mt={8} textAlign={"justify"} maxW={"50%"}>
                <ul className='lists'>
                    <li><b>Effortless Note-Taking :</b> Quickly jot down notes, ideas, and to-do lists with a user-friendly interface.</li>
                    <li><b>Sync Across Devices :</b> Access your notes anytime, anywhere. With seamless synchronization, your data stays up-to-date on all your devices.</li>
                    <li><b>Security First :</b> Your privacy matters. Our app employs top-notch security measures to keep your notes safe and confidential.</li>
                </ul>
            </Text>
            <Image position={"absolute"} right={"0"} w={500} top={70} src={note}/>
        </Box>
    )
}