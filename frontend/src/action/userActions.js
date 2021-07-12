import axios from 'axios'

import {
    USER_LOGIN_REQUIEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUIEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_PROFILE_REQUIEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL
} from '../constance/userConstants'

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUIEST
        })
       const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
        const { data } = await axios.post('/api/signin', { email, password }, config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    } catch (error) {
           dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type:USER_LOGOUT
    })
    document.location.href='/signin'
}

export const userRegister = (name,email,number,password)=>async(dispatch) => {
    try {
        dispatch({
           type: USER_REGISTER_REQUIEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.post('/api/register', { name, email, number, password }, config)
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload:data
        })
         dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
                   dispatch({
      type:USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
    }
}



export const userProfiler = () => async(dispatch,getState) => {
    try {
        dispatch({
            type:USER_PROFILE_REQUIEST
        })
        const {
      userLogin: { userInfo },
    } = getState()


         const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
      
        const { data } = await axios.get('/api/profile', config)
        
        dispatch({
            type: USER_PROFILE_SUCCESS,
            payload:data
        })
    } catch (error) {
                  dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
    }
} 