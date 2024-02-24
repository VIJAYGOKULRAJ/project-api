import { useContext, useState } from "react";
import UsersForm from "../pages/UsersForm"
import ModelPopup from "./ModelPopup";
import { userContext } from "../ContextFile/Context";


const MainContent = ({userData , handleDelete , fetchData , handlePost}) => {
  const { getById , setgetById , modalShow, setModalShow  } = useContext(userContext);
  

  return (
    <div>
      <div className="d-flex justify-content-between">
      <div className="p-3 fw-bold fs-5">
        User Review
      </div>
      <div  className="p-3 fw-bold fs-5">
        <button type="submit" onClick={() => setModalShow(true)} className="border border-primary p-1  px-4">Add User</button>
      </div>
      </div>
   
      <div className="p-3">
        <UsersForm userData = {userData}  handleDelete={handleDelete}/>
        <ModelPopup
        show={modalShow}
        onHide={() => setModalShow(false)}
        userData = {userData}
        fetchData = {fetchData}
        handlePost = {handlePost}
      />
      </div>

    </div>
  )
}

export default MainContent