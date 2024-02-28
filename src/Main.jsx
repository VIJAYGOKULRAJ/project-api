import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import { deleteApi, fetchData, postApi , getTheDataById, putAPI} from "./Axios/ApiCall";
import {userContext} from './ContextFile/Context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Main = () => {
  const [allUser , setAllUser] = useState([])
  const [users, setUsers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [getById, setgetById] = useState({
    id : '' , delete :'' , openModel : ''
  });
  const [showById , setShowById] = useState('')
  const [editUserData , setEditUserData] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  })
  const fetchUserData = async () => {
    try {
      const userData = await fetchData(showById);
      setUsers(userData);
      if(!showById)
      setAllUser(userData)
    
    } catch (error) {
      console.error("Error in fetchUserData:", error);
    }
  };
  const handleDelete = async (userId) => {
    try {

      await deleteApi(userId);
      fetchUserData()
      toast.success('User successfully deleted...!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
      });
    } catch (error) {
      console.error("Error handling delete operation:", error)
      toast.error('Error deleting user. Please try again later.', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };

  //post api
  const handlePost = async (postData) => {
    try {
      const response = await postApi(postData);
      fetchUserData()
      toast.success('User successfully created...!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
      });
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error('Error while create user. Please try again later.', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };
  const handlePut = async (id , editData) => {
    try{
      await putAPI(id , editData)
      fetchUserData()
      toast.success('User successfully Edited ...!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
      });
    }catch(er){
      console.log(er);
      toast.error('Error while edit user. Please try again later.', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  }
  const handleGet = async (id) => {
    if(getById.id && getById.openModel === true){
    try{
      const response = await getTheDataById(id)
      setEditUserData({...editUserData , name : response.name , email : response.email , gender : response.gender , status : response.status })
    }catch (error){
      console.log('Error edit user' , error)
    }
  }}
  
  useEffect(() => {
    setgetById({
      id: '',
      delete: '',
      openModel: ''
    });
  }, [users]);
  useEffect(() => {
    fetchUserData();
  }, [showById]);
  return (
    <>
      <userContext.Provider value={{getById , setgetById ,modalShow, setModalShow , showById, setShowById , editUserData }}>
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-lg-2 p-0 ">
              <SideBar userData={allUser} />
            </div>
            <div className="col-lg-10 p-0">
              <MainContent userData={users} fetchData={fetchUserData}  handleDelete={handleDelete} handlePost = {handlePost}  handleGet = {handleGet} handlePut={handlePut}/>
            </div>
          </div>
        </div>
      </userContext.Provider>
    </>
  );
};
