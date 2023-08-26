import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import styles from "./Register.module.scss"
import { useState } from "react"
import { API_URL } from "../../../config"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

const Register = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [avatar, setAvatar] = useState(null)

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

    fetch(`${API_URL}/auth/register`, options)
      .then((res) => {
        if (res.status === 201) {
          toast.success("New user added!")
          setLogin("")
          setPassword("")
          setPhone("")
          setAvatar(null)
          setTimeout(() => {
            navigate("/")
          }, 2500)
        } else if (res.status === 400) {
          toast.warning("Fill all fields properly!")
        } else if (res.status === 409) toast.warning("Login already exists!")
        else toast.warning("Fill all fields properly!")
      })
      .catch((err) => {
        toast.error("Something went wrong!")
      })
  }
  return (
    <div className={styles.registerForm}>
      <ToastContainer autoClose={2000} />

      <h1 className="mb-4">Register new user</h1>

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
