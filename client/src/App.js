import { Routes, Route } from "react-router-dom"
import Container from "./components/common/Container/Container"
import NavBar from "./components/views/NavBar/NavBar"
import HomePage from "./components/pages/HomePage/HomePage"
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
import MyAccount from "./components/pages/MyAccount/MyAccount"
import { fetchUser } from "./redux/subreducers/userRedux"

function App() {
  const dispatch = useDispatch()

  // fetch logged user to check if someone is logged, when so, add him to
  // redux store.user and display button like login, register and logout
  // depending on this slice of store

  useEffect(() => {
    dispatch(fetchAds())
    dispatch(fetchUser())
  }, [dispatch])
  return (
    <>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<MyAccount />} />
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
    </>
  )
}

export default App
