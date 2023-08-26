import { API_URL } from "../../../config"
import { useDispatch } from "react-redux"
import { logOut } from "../../../redux/subreducers/userRedux"
import { useNavigate } from "react-router-dom"

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const options = {
    method: "DELETE",
  }

  fetch(`${API_URL}/auth/logout`, options).then((res) => {
    dispatch(logOut())
    navigate("/")
  })

  return null
}

export default Logout
