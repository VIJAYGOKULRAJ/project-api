
import { useState } from 'react';
import { inputFeilds, welcomePage } from '../Constant';
import InputFeilds from '../components/inputFeild';
import '../css/WelcomePage.css';
import { useNavigate } from "react-router-dom";
import { LoginApi } from '../Axios/ApiCall';


export const WelcomePage = () => {
  const [values , setValues] = useState({
    email : '' , password : ''
  })
  const navigate = useNavigate();
  const handleClickLogin = async () => {
const response = await LoginApi(values)
response.status === 200 && navigate('/account')
  }
  return (
   <div className='welcomePage'>
    <div className='fs-2 m-3 welcomeText'>{Object.keys(welcomePage).length && welcomePage?.welcomeback}</div>
    <div className='welcome-mainBody text-center d-flex flex-row  py-3 px-5 d-flex  flex-column'>
      {
        inputFeilds && Array.isArray(inputFeilds) && inputFeilds.length > 0 &&  inputFeilds.map((item) => (
          <InputFeilds name={item.name } id={item.id} labelName = {item.labelName}  placeHolder = {item.placeholder} type = {item.type}  setValues={setValues}/>
        ))
      }
      <button className=' button-28 my-5' onClick={handleClickLogin}>{Object.keys(welcomePage).length && welcomePage?.Login}</button>
    </div>
   </div>
  )
}


