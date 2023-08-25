import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import styles from "./Login.module.scss"
import { useState } from "react"
import { API_URL } from "../../../config"
import Alert from "react-bootstrap/Alert"
import Spinner from "react-bootstrap/Spinner"
import { useDispatch } from "react-redux"
import { logIn, fetchUser } from "../../../redux/subreducers/userRedux"

const Login = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState(null) // null, 'loading', 'success', 'serverError', 'clientError'

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

    setStatus("loading")
    fetch(`${API_URL}/api/auth/login`, options)
      .then((res) => {
        if (res.status === 200) {
          setStatus("success")
          setLogin("")
          setPassword("")
          dispatch(fetchUser())
        } else if (res.status === 400) setStatus("clientError")
        else setStatus("serverError")
      })
      .catch((err) => setStatus("serverError"))
  }

  return (
    <div className={styles.registerForm}>
      <h1 className="mb-4">Sign in</h1>

      {status === "success" && (
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>You are logged in!</p>
        </Alert>
      )}

      {status === "serverError" && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong!</Alert.Heading>
          <p>Login or password are incorrect...</p>
        </Alert>
      )}

      {status === "clientError" && (
        <Alert variant="danger">
          <Alert.Heading>Incorrect data</Alert.Heading>
          <p> Login or password are incorrect...</p>
        </Alert>
      )}

      {status === "loading" && (
        <Spinner
          style={{
            height: "50px",
            width: "50px",
          }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden text-center"></span>
        </Spinner>
      )}

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
