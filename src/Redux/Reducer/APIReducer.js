import { Login } from "../Constants"

let initialValues = {
    GetUsers : [],
}
export const GetUsersReducer = (value = initialValues , action) => {
    switch (action?.type){
        case Login.Request : 
        return {GetUsers : action?.payload}
        case Login.Success : 
        return {GetUsers : action?.payload}
        case Login.Error : 
        return {GetUsers : action?.payload}
        default:
            return value
    }
}