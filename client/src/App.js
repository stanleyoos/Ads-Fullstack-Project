import { Routes, Route } from "react-router-dom"
import Container from "./components/common/Container/Container"
import Footer from "./components/views/Footer/Footer"
import NavBar from "./components/views/NavBar/NavBar"
import HomePage from "./components/pages/HomePage/HomePage"
import About from "./components/pages/About/About"

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/add/table" element={<AddTable />} />
        <Route path="/table/:id" element={<SingleTable />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Container>
  )
}

export default App