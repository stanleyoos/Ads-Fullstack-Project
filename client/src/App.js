import { Routes, Route } from "react-router-dom"
import Container from "./components/common/Container/Container"
import Footer from "./components/views/Footer/Footer"
import NavBar from "./components/views/NavBar/NavBar"
import HomePage from "./components/pages/HomePage/HomePage"
import About from "./components/pages/About/About"
import NotFound from "./components/pages/NotFound/NotFound"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchAds } from "./redux/subreducers/adRedux"
import SingleAd from "./components/pages/SingleAd/SingleAd"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAds())
  }, [dispatch])
  return (
    <>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/add/table" element={<AddTable />} />
    <Route path="/table/:id" element={<SingleTable />} /> */}
          <Route path="/ad/:id" element={<SingleAd />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
