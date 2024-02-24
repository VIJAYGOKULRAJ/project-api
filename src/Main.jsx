import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import { deleteApi, fetchData, postApi} from "./Axios/ApiCall";
import {userContext} from './ContextFile/Context'


export const Main = () => {
  const [users, setUsers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [getById, setgetById] = useState({
    id : '' , delete :'' , openModel : ''
  });
  const fetchUserData = async () => {
    try {
      const userData = await fetchData();
      setUsers(userData);
    } catch (error) {
      console.error("Error in fetchUserData:", error);
    }
  };
  const handleDelete = async (userId) => {
    try {
      await deleteApi(userId);
      fetchUserData();
    } catch (error) {
      console.error("Error handling delete operation:", error);
    }
  };

  //post api
  const handlePost = async (postData) => {
    try {
      const response = await postApi(postData);
      fetchUserData();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  
  useEffect(() => {
    setgetById({
      id: '',
      delete: '',
      openModel: ''
    });
  }, [users]);
  useEffect(() => {
    fetchUserData();
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
              <MainContent userData={users} fetchData={fetchUserData}  handleDelete={handleDelete} handlePost = {handlePost} />
            </div>
          </div>
        </div>
      </userContext.Provider>
    </>
  );
};
