import { Form } from 'react-bootstrap'
import './dropdown.css'

const Dropdowns = () => {
  return (
    <Form.Select aria-label="Default select example" style={{boxShadow: '0 0 0 70px #00000'}}>
    <option>Add discount code (optional)</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>
  )
}

export default Dropdowns