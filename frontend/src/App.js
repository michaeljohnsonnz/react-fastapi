import { ThemeProvider } from "@chakra-ui/core";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Todos />
    </ThemeProvider>
  );
}

export default App;