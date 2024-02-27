import axios from "axios";
import {constantFile} from "../Constant.js"
export const fetchData = async (id) => {
  try {
    const response = await axios.get(
      id ? `https://gorest.co.in/public/v2/users/${id}` : "https://gorest.co.in/public/v2/users",
      {
        headers: {
          Authorization:
            "Bearer " +
            "032c91f0b1744e89f2f312238d52c581c0553d923d86e8272ec2999967525691",
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
  const token =
    "032c91f0b1744e89f2f312238d52c581c0553d923d86e8272ec2999967525691";
  return axios
    .delete(`https://gorest.co.in/public/v2/users/${getById}`, {
      headers: {
        Authorization: `Bearer ${token}`,
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