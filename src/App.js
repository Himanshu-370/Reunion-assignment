import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Container sx={{ bgcolor: "#fffbf4" }} maxWidth="xxl">
        <Header />
        <Hero />
      </Container>
    </div>
  );
}

export default App;
