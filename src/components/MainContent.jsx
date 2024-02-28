import { useContext, useState } from "react";
import UsersForm from "../pages/UsersForm"
import ModelPopup from "./ModelPopup";
import { userContext } from "../ContextFile/Context";
import '../css/mainContent.css'


const MainContent = ({userData , handleDelete , fetchData , handlePost , handlePut}) => {
  const { getById , setgetById , modalShow, setModalShow  } = useContext(userContext);
  

  return (
    <div>
      <div className="d-flex justify-content-between">
      <div className="p-3 fw-bold fs-5">
        User Review
      </div>
      <div  className="p-3 fw-bold fs-5">
        <button type="submit" onClick={() => setModalShow(true)} className="button-28">Add User</button>
      </div>
      </div>
   
      <div className="p-3">
        <UsersForm userData = {userData}  handleDelete={handleDelete} handlePut={handlePut}/>
        <ModelPopup
        show={modalShow}
        onHide={() => {setModalShow(false);setgetById({
          id: '',
          delete: '',
          openModel: ''
        });}}
        userData = {userData}
        fetchData = {fetchData}

        handlePost = {handlePost}
      />
      </div>

    </div>
  )
}

export default MainContent