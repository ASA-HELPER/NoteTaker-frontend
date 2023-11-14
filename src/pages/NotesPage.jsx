import { Box, Button, Grid, IconButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {noteReducer} from './../Redux/notes/note.reducer';
import { useEffect, useRef, useState } from "react";
import { getUser } from './../Redux/users/user.actions';
import NoteCard from "../components/NotesPage/NoteCard/NotesCard";
import {MdAddCircleOutline} from 'react-icons/md'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { createNotes,getNotes } from "../Redux/notes/note.actions";
import '../App.css'

export default function NotesPage(){
    const {loading,error,data} = useSelector((state)=>state.noteReducer)
    const [notes,setNotes] = useState([])
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    useEffect(()=>{
        dispatch(getNotes())
    },[])
    useEffect(()=>{
        setNotes(data)
    },[data])

    const createNote =()=>{
        dispatch(createNotes({title,body}))
        onClose()
    }

    return(
        <Box mt={20} padding={8}>
            <Grid w={"90"} margin={"auto"} gridTemplateColumns="repeat(4,1fr)" gap={10} className="cards-resp">
                {notes?.map((el)=><NoteCard {...el}/>)}
            </Grid>
            <>
                <IconButton position={"fixed"} w={16} h={16} borderRadius={50} bg={"seagreen"} bottom={0} right={0} margin={16} onClick={onOpen} icon={<MdAddCircleOutline size={30}/>} className="card-new"></IconButton>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create New Note</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Input value={title}m placeholder="Please enter title" onChange={(e)=>setTitle(e.target.value)}></Input>
                            <Textarea mt={8} value={body} placeholder={'Please enter description'} onChange={(e)=>setBody(e.target.value)}></Textarea>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={createNote}>
                                Create
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        </Box>
    )
}