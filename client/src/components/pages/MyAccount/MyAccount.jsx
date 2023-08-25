import styles from "./MyAccount.module.scss"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import { useSelector } from "react-redux"
import { getLoggedUser } from "../../../redux/subreducers/userRedux"

const MyAccount = () => {
  const user = useSelector(getLoggedUser)
  return (
    <>
      <Container>
        <Row>
          <Col sm={4} className="text-center mx-auto">
            <Image
              src={"http://localhost:8000/uploads/" + user.avatar}
              alt="ad's image"
              className={styles.image}
              roundedCircle
              fluid
            />

            <h1 className={styles.cardTitle}>{user.login}</h1>

            <Card.Text className={styles.cardContent}>{user.phone}</Card.Text>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyAccount
