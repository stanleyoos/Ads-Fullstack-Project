import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import styles from "./Register.module.scss"
import { useState } from "react"
import { API_URL } from "../../../config"
import Alert from "react-bootstrap/Alert"
import Spinner from "react-bootstrap/Spinner"

const Register = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [avatar, setAvatar] = useState(null)
  const [status, setStatus] = useState(null) // null, 'loading', 'success', 'serverError', 'clientError', 'loginError'

  const handleSubmit = (e) => {
    e.preventDefault()

    const fd = new FormData()

    fd.append("login", login)
    fd.append("password", password)
    fd.append("phone", phone)
    fd.append("avatar", avatar)

    const options = {
      method: "POST",
      body: fd,
    }

    setStatus("loading")
    // fetch POST method to /auth/register
    fetch(`${API_URL}/api/auth/register`, options)
      .then((res) => {
        if (res.status === 201) {
          setStatus("success")
          setLogin("")
          setPassword("")
          setPhone("")
          setAvatar(null)
        } else if (res.status === 400) setStatus("clientError")
        else if (res.status === 409) setStatus("loginError")
        else setStatus("serverError")
      })
      .catch((err) => {
        setStatus("serverError")
      })
  }
  return (
    <div className={styles.registerForm}>
      <h1 className="mb-4">Register new user</h1>

      {status === "success" && (
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>You've been successfully registered!</p>
        </Alert>
      )}

      {status === "serverError" && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong!</Alert.Heading>
          <p>
            Check if length of password and login are acceptable or server may
            be down
          </p>
        </Alert>
      )}

      {status === "clientError" && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong!</Alert.Heading>
          <p>You have to fill all fields!</p>
        </Alert>
      )}

      {status === "loginError" && (
        <Alert variant="warning">
          <Alert.Heading>Login already in use!</Alert.Heading>
          <p>You have to use another login</p>
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
            placeholder="Min 7 characters"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Min 8 characters"
          />
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Format 123-456-789"
          />
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Label>Avatar</Form.Label>
          <Form.Control
            onChange={(e) => setAvatar(e.target.files[0])}
            type="file"
          />
        </Form.Group>

        <Button variant="light" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  )
}

export default Register
