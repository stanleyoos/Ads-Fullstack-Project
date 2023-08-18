import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import styles from "./Add.module.scss"
import { Link } from "react-router-dom"

function Add({ title, image, content, _id }) {
  return (
    <Card className={styles.card} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`/uploads/${image}`} alt="hello" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Link to={`/ad/${_id}`}>
          <Button variant="light">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Add
