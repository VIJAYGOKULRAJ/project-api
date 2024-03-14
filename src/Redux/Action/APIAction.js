import { baseUrl } from "../../GlobalFiles/Interceptor";
import { getUsers } from "../Constants"


export  const getAllUser = (id) => async (dispatch) => {
dispatch({
        type : getUsers.Request,
        payload : []
    })
    try{
        
              const fetchData = async (id) => await baseUrl.get(
                id ? `users/${id}` : `users`,
              );
          
              await dispatch({
                tyoe : getUsers.Success,
                payload : {data : id ? [ fetchData.data] : fetchData.data}
              }) 
            console.log(fetchData , "fetchdata");
          

    }catch(error){
        await dispatch({
            type : getUsers.Error,
            payload : {data : {}}
        })
    }
}
