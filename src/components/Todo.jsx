import { Stack, Flex, Text, IconButton, HStack } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";


const Todo = ({ 
    todo, 
    todos, 
    setTodos
}) => {
    const [check, setCheck] = useState(false)

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id) )
    }

  return (
    <Stack sx={{
        borderBottom: '1px solid',
        p: '10px 0'
    }}>
        <Flex sx={{
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Text sx={{
                fontSize: '.9rem',
                textDecor: check ? 'line-through' : '',
                opacity: check ? .5 : 1
            }}>{todo.text}</Text>
            <HStack>
                <IconButton icon={<CheckIcon />} onClick={() => setCheck(!check)} />
                <IconButton onClick={deleteHandler} icon={<DeleteIcon />} />
            </HStack>
        </Flex>
    </Stack>
  )
}

export default Todo