
import axios from "axios";

export const DeleteApi = (getById) => {
    console.log(getById,'------------')

    const token =
    "032c91f0b1744e89f2f312238d52c581c0553d923d86e8272ec2999967525691";
    axios
    .request({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method:"DELETE" ,  
      url:`https://gorest.co.in/public/v2/users/${getById}`
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error("Error adding user:", error);
    });


}