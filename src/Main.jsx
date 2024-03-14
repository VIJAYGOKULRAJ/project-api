import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import {
  deleteApi,
  fetchData,
  postApi,
  getTheDataById,
  putAPI,
} from "./Axios/ApiCall";
import { userContext } from "./ContextFile/Context";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import showToast from "./components/Tositify";
import { useDispatch } from "react-redux";
import { getAllUser } from "./Redux/Action/APIAction";

export const Main = () => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    allUser: [],
    users: [],
    editUserData: {
      name: "",
      email: "",
      gender: "",
      status: "",
    },
  });

  const [getById, setgetById] = useState({
    id: "",
    delete: "",
    openModel: "",
  });
  const [showById, setShowById] = useState("");

  const fetchUserData = async () => {
    try {
      const userData = await fetchData(showById);
      const res = dispatch(getAllUser(showById)).then((res) => {
        console.log(res , "response");
      })
      setUserData((prevData) => ({ ...prevData, users: userData }));
      if (!showById)
        setUserData((prevData) => ({ ...prevData, allUser: userData }));
    } catch (error) {
      console.error("Error in fetchUserData:", error);
    }
  };
  const handleDelete = async (userId) => {
    const deletePerson = await getTheDataById(userId);
    try {
      getById.delete === false &&
        (await swal({
          title: `Are you sure? ${deletePerson.name} will be Delete...! `,
          text: "Once deleted, you will not be able to recover this user!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })) &&
        (await deleteApi(userId));
      fetchUserData();
      showToast("User successfully deleted...!", "success");
    } catch (error) {
      console.error("Error handling delete operation:", error);
      showToast("Error while deleted...!", "error");
    }
  };

  const handlePost = async (postData) => {
    try {
      const response = await postApi(postData);
      fetchUserData();
      showToast("User successfully created...!", "success");
    } catch (error) {
      console.error("Error adding user:", error);
      showToast("Error while Adding user...!", "error");
    }
  };
  const handlePut = async (id, editData) => {
    try {
      await putAPI(id, editData);
      fetchUserData();
      showToast("User successfully Edited ...!", "success");
    } catch (er) {
      console.log(er);
      showToast("Error while edit user...!", "error");
    }
  };
  const handleGet = async (id) => {
    if (getById.id && getById.openModel === true) {
      try {
        const response = await getTheDataById(id);
        setUserData((prevData) => ({
          ...prevData,
          editUserData: {
            ...prevData.editUserData,
            name: response.name,
            email: response.email,
            gender: response.gender,
            status: response.status,
          },
        }));
      } catch (error) {
        console.log("Error edit user", error);
      }
    }
  };

  useEffect(() => {
    setgetById({
      id: "",
      delete: "",
      openModel: "",
    });
  }, [userData.users]);
  useEffect(() => {
    fetchUserData();
  }, [showById]);
  return (
    <>
      <userContext.Provider
        value={{
          getById,
          setgetById,
          showById,
          setShowById,
		  editUserData: userData.editUserData,
        }}
      >
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-lg-2 p-0 vh-100">
              <SideBar userData={userData.allUser} />
            </div>
            <div className="col-lg-10 p-0 ">
              <MainContent
                userData={userData.users}
                fetchData={fetchUserData}
                handleDelete={handleDelete}
                handlePost={handlePost}
                handleGet={handleGet}
                handlePut={handlePut}
              />
            </div>
          </div>
        </div>
      </userContext.Provider>
    </>
  );
};
