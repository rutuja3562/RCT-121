import logo from "./logo.svg";
import "./App.css";

import { Buttontoggle } from "./Components/Buttontoggle";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import { Navbar } from "./Components/Navbar";
import {
  ChakraProvider,
  BreadcrumbLink,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "@chakra-ui/react";
import { Home } from "./Components/Home";
function App() {
  const [theme, toggleTheme] = useContext(AppContext);
  return (
    <div className="App">
      <ChakraProvider>
        <Breadcrumb spacing="8px">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Button colorScheme="blue" onClick={toggleTheme}>
              toggle
            </Button>
          </BreadcrumbItem>
        </Breadcrumb>
  {/*<Buttontoggle />*/}
        <Home/>
      </ChakraProvider>
      {/* <Counter /> */}
      {/* <Click/> */}
      {/*  <Navbar/>
      <Button/>
  <button onClick={toggleTheme}>toggle</button>*/}
    </div>
  );
}

export default App;
{
  /*<Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href="#">About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href="#">Contact</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>;*/
}
