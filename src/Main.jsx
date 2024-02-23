import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import axios from "axios";
import {userContext} from './ContextFile/Context'


export const Main = () => {
  const [users, setUsers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [getById, setgetById] = useState({
    id : '' , delete :'' , openModel : ''
  });
 
  const fetchData = async () => {
    try {
      const response = await axios.get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorization:
            "Bearer " +
            "032c91f0b1744e89f2f312238d52c581c0553d923d86e8272ec2999967525691",
        },
      });

      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <userContext.Provider value={{getById , setgetById ,modalShow, setModalShow }}>
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-lg-2 p-0 ">
              <SideBar userData={users} />
            </div>
            <div className="col-lg-10 p-0">
              <MainContent userData={users} fetchData={fetchData} />
            </div>
          </div>
        </div>
      </userContext.Provider>
    </>
  );
};
