import React,{useEffect} from 'react'
import { Container, Row, Col,ListGroup } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {userProfiler} from '../action/userActions'
const ProfileScreen = ({history}) => {
 
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin
      const userProfile = useSelector(state => state.userProfile)
    const { error, loading, user } = userProfile

    const dispatch = useDispatch()
    useEffect(() => {
        if (!userInfo) {
         history.push('/signin')
        } else {
            dispatch(userProfiler())
     }
    },[dispatch, history, userInfo,])
    return (
        <Container>
            <Row>
                <Col style={{marginTop:'10%'}} md={4}>
                    <ListGroup>
                     
                             <ListGroup.Item>
                        <p>Name: {user.name}</p>
                        </ListGroup.Item>
                       
                    <ListGroup.Item>
                        <p>E-mail: {user.email}</p>
                        </ListGroup.Item>
                       
                        <ListGroup.Item>
                        <p>Number: {user.number}</p>
                    </ListGroup.Item>
               </ListGroup>
                    
                </Col>
                <Col md={8}>
                    <h1 className='text-center' style={{marginTop:'10%'}}>Projects Orders...</h1>
                </Col>
           </Row>
        </Container>
    )
}

export default ProfileScreen
