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

//user login reducer
 export const userLoginReducer = (state={},action) => {
     switch (action.type) {
        case USER_LOGIN_REQUIEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
    }
 }

export const userRegister = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUIEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { lading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
      case USER_LOGOUT:
      return {}
    default:
      return state
   }
}
 
export const getProfile = (state = {user:{}}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUIEST:
      return { ...state, loading: true }
    case USER_PROFILE_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_PROFILE_FAIL:
      return { loading: false, error: action.payload }
           case USER_LOGOUT:
            return {}
    default:
      return state
  }
}