import { Login } from "../Constants"

let initialValues = {
    LoginModel : [],
}
export const LoginReducer = (value = initialValues , action) => {
    switch (action?.type){
        case Login.Request : 
        return {LoginModel : action?.payload}
        case Login.Success : 
        return {LoginModel : action?.payload}
        case Login.Error : 
        return {LoginModel : action?.payload}
        default:
            return value
    }
}