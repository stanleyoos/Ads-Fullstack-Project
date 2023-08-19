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
import AdAdd from "./components/pages/AdAdd/AdAdd"
import AdEdit from "./components/pages/AdEdit/AdEdit"
import AdRemove from "./components/pages/AdRemove/AdRemove"
import Login from "./components/pages/Login/Login"
import Register from "./components/pages/Register/Register"
import Logout from "./components/pages/Logout/Logout"

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
          <Route path="/ad/:id" element={<SingleAd />} />
          <Route path="/ad/add" element={<AdAdd />} />
          <Route path="/ad/edit/:id" element={<AdEdit />} />
          <Route path="/ad/remove/:id" element={<AdRemove />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
