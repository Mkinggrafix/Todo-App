import { Input, Button, Flex, useToast } from "@chakra-ui/react";

const InputCom = ({ inputText, setInputText, todos, setTodos }) => {
  const toast = useToast();

  const handleSubmit = () => {
    inputText === '' && toast({
      title: 'No Content',
      description: 'Enter a todo',
      status: 'warning',
      duration: '2000',
      isClosable: true
    }) 
  }

  const addTodoHandler = (e) => {
    inputText !== '' && setTodos([
      ...todos,
      {text: inputText, check: false ,id: Math.floor(Math.random() * 1000)}
    
    ]);
    
    setInputText('')
  }
  return (
    <Flex sx={{
      w: '350px',
      gap: '20px',
      m: '50px auto'
    }}>
      <Input 
        type="text" 
        variant="filled" 
        placeholder="Enter Todo"
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
      />
      <Button sx={{
          bg: 'tomato',
          color: "white",
          p: 5
        }}
        onClick={() => {
          handleSubmit()
          addTodoHandler()
        }}
      >
        Add Todo</Button>
    </Flex>
  )
}

export default InputCom