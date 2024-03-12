import axios from "axios"
import { Login } from "../Constants"
const loginURL = process.env.REACT_APP_LOGINURL

export const LoginAction = (payload) => async (dispatch) => {
    dispatch({
        type : Login.Request,
        payload : {}
    })
    try{
        const LoginData =  await axios.post(`${loginURL}api/v1/login`, payload, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          await dispatch({
            type : Login.Success,
            payload : {data : LoginData}
          })
          
         return LoginData
       
    }catch(error){
        await dispatch({
            type : Login.Error,
            payload : {data : {}}
        })
    }
}