import { Box, Heading } from "@chakra-ui/react";
import Todo from "./Todo";

const Todos = ({ 
    todos, 
    setTodos
}) => {
  return (
    <Box sx={{
        maxW: '400px',
        minH: '150px',
        m: '0 auto',
        border: '1px solid',
        p: '10px',
        borderRadius: '5px'
    }}>
        {
            todos.length > 0 ? todos.map(todo => 
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    todos={todos} 
                    setTodos={setTodos}
                />)
            : <Heading sx={{
                h: '150px',
                fontSize: '1.5rem',
                fontWeight: 500,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>Todo List is empty</Heading>
        }
    </Box>
  )
}

export default Todos