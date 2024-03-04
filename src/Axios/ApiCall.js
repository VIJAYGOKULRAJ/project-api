import axios from "axios";
import {constantFile} from "../Constant.js"
export const fetchData = async (id) => {
  try {
    const response = await axios.get(
      id ? `${constantFile.BASE_URL}/${id}` : `${constantFile.BASE_URL}`,
      {
        headers: {
          Authorization: `Bearer ${constantFile.TOKEN}`,
        },
      }
    );

    return id ? [ response.data] : response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};

export const deleteApi = (getById) => {
 return axios
    .delete(`${constantFile.BASE_URL}/${getById}`, {
      headers: {
        Authorization:  `Bearer ${constantFile.TOKEN}`,
      },
    })
    .then((response) => {
      console.log("User deleted successfully");
      return response.data; 
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
      throw error;
    });
};




export const postApi = async (data) => {
  try {
    const response = await axios.post(constantFile.BASE_URL, data, {
      headers: {
        Authorization: `Bearer ${constantFile.TOKEN}`,
      },
    });
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
    const res = await axios.put(`${constantFile.BASE_URL}/${id}`, editData, {
      headers: {
        Authorization: `Bearer ${constantFile.TOKEN}`,
      },
    });
    return res;
  }catch(error){
    console.log('error while eidt user' , error)
  }
}