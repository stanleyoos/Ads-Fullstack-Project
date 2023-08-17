import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import styles from './Add.module.scss'
import clsx from "clsx"

const Add = ({title, _id}) => {
  return (
    <Card className="my-4 p-4">
      <Card.Body className="d-block d-sm-flex justify-content-between align-items-center">
        <div className="d-block d-sm-flex">
          <Card.Title className="me-sm-4 mb-3 mb-sm-0"> {title}</Card.Title>
          
        </div>

        <div>
          <Link to={`/add/${_id}`}>
            <Button variant="light">Show more</Button>
          </Link>
          <FaTrash
            //onClick={handleDelete}
            className={clsx("ms-3", styles.trash)}
          />
        </div>
      </Card.Body>
    </Card>
  )
}

export default Add