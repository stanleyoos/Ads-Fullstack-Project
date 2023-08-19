import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import styles from "./Register.module.scss"
import { useState } from "react"

const Register = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [avatar, setAvatar] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(login, password, phone, avatar)
  }
  return (
    <div className={styles.registerForm}>
      <h1 className="mb-4">Register new user</h1>
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

        <Form.Group className="mb-5">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Enter your phone number"
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
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Register
