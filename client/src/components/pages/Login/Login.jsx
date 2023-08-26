import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import styles from "./Login.module.scss"
import { useState } from "react"
import { API_URL } from "../../../config"
import { ToastContainer, toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchUser } from "../../../redux/subreducers/userRedux"

const Login = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
      credentials: "include",
    }

    fetch(`${API_URL}/auth/login`, options)
      .then((res) => {
        if (res.status === 200) {
          toast.success("User logged in!")
          setLogin("")
          setPassword("")
          dispatch(fetchUser())
          setTimeout(() => {
            navigate("/")
          }, 2500)
        } else if (res.status === 400) toast.warning("Try again!")
        else toast.error("Server error!")
      })
      .catch(() => toast.error("Server error!"))
  }

  return (
    <div className={styles.registerForm}>
      <h1 className="mb-4">Sign in</h1>
      <ToastContainer autoClose={2000} />

      <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Group className="mb-4">
          <Form.Label>Login</Form.Label>
          <Form.Control
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Enter your login"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>

        <Button variant="light" type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  )
}

export default Login
