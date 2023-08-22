import styles from "./SearchBox.module.scss"
import Form from "react-bootstrap/Form"
import { FaSearch } from "react-icons/fa"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { API_URL } from "../../../config"

const SearchBox = () => {
  const [searchPhase, setSearchPhase] = useState("")

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log(searchPhase)

    // fetch(`${API_URL}/api/ads/phrase/${searchPhase}`)
    //   .then((res) => res.json())
    //   .then((ads) => console.log(ads))
  }
  return (
    <>
      <Form className="my-4 mx-2" onSubmit={handleSearchSubmit}>
        <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
          <Form.Control
            className={styles.searchBox}
            type="text"
            placeholder="Search for ads..."
            value={searchPhase}
            onChange={(e) => setSearchPhase(e.target.value)}
          />
          <Button variant="light" type="submit">
            <FaSearch />
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default SearchBox
