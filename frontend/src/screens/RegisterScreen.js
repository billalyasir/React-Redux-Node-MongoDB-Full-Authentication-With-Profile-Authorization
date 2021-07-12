import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { userRegister } from '../action/userActions'
import Message from '../components/Message'
const RegisterScreen = ({location,history}) => {
const [name, setName] = useState('')
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()
    const registerUser = useSelector((state) => state.registerUser)
  const { userInfo, error } = registerUser
 

    const redirect = location.search ? location.search.split('=')[1] : '/'
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])
    const submitHandler = (e) => {
        e.preventDefault()
        //dispatch
        dispatch(userRegister( name, email, number, password ))
    }
    return (
       <FormContainer>
      
      <h1 style={{marginTop:'20%'}}>Sign In</h1>
         {error && <Message variant='danger'>{error}</Message>}
    
        <Form onSubmit={submitHandler}>
           <Form.Group controlId='name'>
          <Form.Label>Enter Your Name...</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
              onChange={(e) => setName(e.target.value)}
              required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address...</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='phone'>
          <Form.Label>Enter Your Phone Number...</Form.Label>
          <Form.Control
            type='phone'
            placeholder='Enter Phone number'
            value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password...</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          ></Form.Control>
        </Form.Group>
         <br/>
        <Button type='submit' variant='primary'>
          SignUp
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Already Customer?{' '}
          <Link to={redirect ? `/signin?redirect=${redirect}` : '/signin'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
    )
}

export default RegisterScreen
