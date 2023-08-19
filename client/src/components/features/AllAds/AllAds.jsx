import { useSelector } from "react-redux"
import { getAllAds } from "../../../redux/subreducers/adRedux"
import { Spinner } from "react-bootstrap"
import Ad from "../Ad/Ad"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

const AllAds = () => {
  const ads = useSelector(getAllAds)

  if (ads.length === 0) {
    return (
      <div className="text-center">
        <Spinner
          style={{
            height: "100px",
            width: "100px",
          }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden text-center">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <>
      <Container>
        <Row className="justify-content-center ">
          {ads.map((add) => (
            <Ad {...add} key={add._id} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default AllAds
