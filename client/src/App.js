import Button from "@mui/material/Button"
import Container from "./components/common/Container/Container"
import Footer from "./components/views/Footer/Footer"
import ResponsiveAppBar from "./components/views/NavBar/NavBar"

function App() {
  return (
    <Container>
      <ResponsiveAppBar />

      <Footer />
    </Container>
  )
}

export default App
