import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import styles from "./Ad.module.scss"
import { Link } from "react-router-dom"
import clsx from "clsx"
import { IMGS_URL } from "../../../config"

function Ad({ title, image, content, _id }) {
  return (
    <Card className={styles.card} style={{ width: "18rem" }}>
      <Card.Img
        className={clsx("rounded mt-2", styles.adImage)}
        variant="top"
        src={IMGS_URL + image}
        alt="ad's image"
      />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <Card.Text className={styles.cardContent}>{content}</Card.Text>
        <Link to={`/ad/${_id}`}>
          <Button variant="light">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Ad
