import React from 'react'
import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../action/userActions'
const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
    return (
           <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Workbes</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <LinkContainer to='/about'>
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                {
                  userInfo ? (
                     <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                  ) : (
                           <LinkContainer to='/signin'>
                <Nav.Link>
                  Login
                </Nav.Link>
              </LinkContainer>
                  )
                }
         
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    )
}

export default Header
