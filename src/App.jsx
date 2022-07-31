import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import InputCom from "./components/InputCom";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  ) 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const [inputText, setInputText] = useState('')


  return (
    <ChakraProvider>
      <Nav />
      <Header />
      <InputCom 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
      />
      <Todos 
        todos={todos}
        setTodos={setTodos}
      />
    </ChakraProvider>
  )
}

export default App
