import styles from "./SearchBox.module.scss"
import Form from "react-bootstrap/Form"
import { FaSearch } from "react-icons/fa"

const SearchBox = () => {
  return (
    <>
      <Form className="my-4 mx-2">
        <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
          <Form.Control
            className={styles.searchBox}
            type="text"
            placeholder="Search for ads..."
          />
          <FaSearch className="ms-2" />
        </Form.Group>
      </Form>
    </>
  )
}

export default SearchBox
