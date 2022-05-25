import React, { useContext } from 'react'
import {
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { AppContext } from '../Context/AppContext';
import style from "./Button.module.css";
export const Home = () => {
    const [theme,toggleTheme]=useContext(AppContext)
  return (
    <div>
      <ChakraProvider>
        <Container
          // maxW="md"
          className={`${style.buttonbase} ${
            theme == "light" ? style.light : style.dark
          }`}
        >
          <FormControl>
            <FormLabel htmlFor="email">Name</FormLabel>
            <Input variant="outline" id="name" type="text" />
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input variant="outline" id="email" type="email" />
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input variant="outline" id="password" type="text" />
            <Button bg={"black"} color={"white"} m={5}>Submit</Button>
          </FormControl>
        </Container>
      </ChakraProvider>
    </div>
  );
}
