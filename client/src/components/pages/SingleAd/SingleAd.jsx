import { redirect, useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { getSingleAd } from "../../../redux/subreducers/adRedux"
import Image from "react-bootstrap/Image"
import styles from "./SingleAd.module.scss"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import { FaTrash, FaEdit } from "react-icons/fa"
import dateToString from "../../../utils/dateToString"

const SingleAd = () => {
  const { id } = useParams()

  const ad = useSelector((state) => getSingleAd(state, id))

  if (ad === undefined) redirect("/")

  return (
    <>
      <Container>
        <Row>
          <Col sm={6} className="text-center">
            <Image
              src={"http://localhost:8000/uploads/" + ad.image}
              alt="ad's image"
              className="rounded "
              fluid
            />
          </Col>
          <Col sm={6} className="justify-content-center">
            <Card style={{ width: "auto" }}>
              <Card.Body>
                <h1 className={styles.cardTitle}>{ad.title}</h1>

                <Card.Text className={styles.cardContent}>
                  {ad.content}
                </Card.Text>

                <Card.Text className={styles.cardPrice}>{ad.price} $</Card.Text>

                <Card.Text className={styles.cardDate}>
                  {dateToString(ad.date)}
                </Card.Text>

                <div className={styles.links}>
                  <Link to={`/ad/remove/${id}`}>
                    <FaTrash className="me-3" />
                  </Link>

                  <Link to={`/ad/edit/${id}`}>
                    <FaEdit />
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SingleAd
