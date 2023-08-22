import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import styles from "./AdForm.module.scss"
import { useState } from "react"
// import Alert from "react-bootstrap/Alert"
// import Spinner from "react-bootstrap/Spinner"

const AdForm = ({ action, actionType, ad }) => {
  const [title, setTitle] = useState(ad?.title || "")
  const [content, setContent] = useState(ad?.content || "")

  //   //DATEPICKER
  //   const [date, setDate] = useState("")

  //   const [image, setImage] = useState(null)
  //   const [localization, setLocalization] = useState(null)

  //   //LOGGED USER
  //   const [user, setUser] = useState("")
  //   const [status, setStatus] = useState(null) // null, 'loading', 'success', 'serverError', 'clientError', 'loginError'

  return (
    <div className={styles.registerForm}>
      <h1 className="mb-4">{actionType}</h1>

      <Form className={styles.form} onSubmit={action}>
        <Form.Group className="mb-4">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Min 5 characters"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Content</Form.Label>
          <Form.Control
            value={content}
            as="textarea"
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="Min 20 characters"
          />
        </Form.Group>

        {/* <Form.Group className="mb-5">
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
    </Form.Group> */}

        <Button variant="light" type="submit">
          {actionType === "Add new AD" ? "Add" : "Save"}
        </Button>
      </Form>
    </div>
  )
}

export default AdForm
