
import axios from "axios";
import  {baseUrl}  from "../GlobalFiles/Interceptor.jsx";

const loginURL = process.env.REACT_APP_LOGINURL


export const fetchData = async (id) => {
  try {
    const response = await baseUrl.get(
      id ? `users/${id}` : `users`,
    );

    return id ? [ response.data] : response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  } 
};

export const deleteApi = (getById) => {
 return baseUrl
    .delete(`users/${getById}`, {
    })
    .then((response) => {
      return response.data; 
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
      throw error;
    });
};




export const postApi = async (data) => {
  try {
    const response = await baseUrl.post('users', data);
    
    return response.data;
  } catch (error) {
    console.error("Error in postApi:", error);
    throw error;
  }
};

export const getTheDataById = async (id) => {
  try{
    const response = await fetchData(id)
    return response[0]
  }
  catch (error){
    console.log("erroe get user" , error)
  }
}

export const putAPI = async (id , editData) => {
  try{
    const res = await baseUrl.put(`users/${id}`, editData);
    return res;
  }catch(error){
    console.log('error while eidt user' , error)
  }
}


export const LoginApi = async (values) => {
  try{
	const login = await axios.post(`${loginURL}api/v1/login`, values, {
		headers: {
		  'Content-Type': 'application/json',
		},
	  });
   return login
  }
  catch(err){
    console.log(err , 'while Login the error');
  }
}