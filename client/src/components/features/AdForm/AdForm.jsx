import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import styles from "./AdForm.module.scss"
import { useState } from "react"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"
// import Alert from "react-bootstrap/Alert"
// import Spinner from "react-bootstrap/Spinner"

const AdForm = ({ action, actionType, ad }) => {
  const [title, setTitle] = useState(ad?.title || "")
  const [content, setContent] = useState(ad?.content || "")
  const [date, setDate] = useState(new Date(ad?.date || new Date()))
  const [price, setPrice] = useState(ad?.price || 0)
  const [localization, setLocalization] = useState(ad?.localization || "")
  const [image, setImage] = useState(null)

  //   const [status, setStatus] = useState(null) // null, 'loading', 'success', 'serverError', 'clientError', 'loginError'

  return (
    <div className={styles.registerForm}>
      <h1 className="mb-4">{actionType}</h1>

      <Form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          action(title, content, price, date, localization, image)
        }}
      >
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
            placeholder="Min 10 characters"
          />
        </Form.Group>

        <Form.Group className="mb-4 d-flex flex-column">
          <Form.Label>Date</Form.Label>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </Form.Group>

        <Form.Group className="mb-4 ">
          <Form.Label>Price</Form.Label>
          <Form.Control
            className=" mx-auto"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "70px" }}
            type="number"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Localization</Form.Label>
          <Form.Control
            value={localization}
            onChange={(e) => setLocalization(e.target.value)}
            type="text"
            placeholder="Enter your localization"
          />
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Label>Image</Form.Label>
          <Form.Control
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="mb-5">
          {actionType === "Add new AD" ? "Add" : "Save"}
        </Button>
      </Form>
    </div>
  )
}

export default AdForm
