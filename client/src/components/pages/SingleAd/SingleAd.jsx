import { redirect, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getSingleAd } from "../../../redux/subreducers/adRedux"
import Image from "react-bootstrap/Image"
import styles from "./SingleAd.module.scss"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const SingleAd = () => {
  const { id } = useParams()

  const ad = useSelector((state) => getSingleAd(state, id))

  if (ad === undefined) redirect("/")
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <Image
              src={"http://localhost:8000/uploads/" + ad.image}
              alt="ad's image"
              className="rounded"
              fluid
            />
          </Col>
          <Col sm={6} className="justify-content-center">
            <h4 className="text-center">{ad.title}</h4>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SingleAd
