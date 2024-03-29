import { useContext, useState } from "react";
import UsersForm from "../pages/UsersForm"
import ModelPopup from "./ModelPopup";
import {commonFilePages} from "../Constant.js"
import { userContext } from "../ContextFile/Context";
import '../css/mainContent.css'


const MainContent = ({userData , handleDelete , fetchData , handlePost , handleGet , handlePut}) => {
  const [modalShow, setModalShow] = useState(false);
  const {  setgetById } = useContext(userContext);
  

  return (
    <div>
      <div className="d-flex justify-content-between">
      <div className="p-3 fw-bold fs-5">
        {commonFilePages?.userReview}
      </div>
      <div  className="p-3 fw-bold fs-5">
        <button type="submit" onClick={() => setModalShow(true)} className="button-28">{commonFilePages?.addUser}</button>
      </div>
      </div>
   
      <div className="p-3">
        <UsersForm userData = {userData}  handleDelete={handleDelete} handleGet={handleGet}   setModalShow={setModalShow}  />
        <ModelPopup
        show={modalShow}
        onHide={() => {setModalShow(false);setgetById({
          id: '',
          delete: '',
          openModel: ''
        }); }}
        userData = {userData}
        fetchData = {fetchData}
        handlePut={handlePut}
        handlePost = {handlePost}
      />
      </div>

    </div>
  )
}

export default MainContent