
import { Icon } from '@iconify/react';
import '../css/InputFeilds.css'; 
import { useState } from 'react';


const InputFeilds = ({name , id , labelName , type , placeHolder  , setValues}) => {
  const handleChange = (e) => {
    const {name , value} = e.target
    setValues((prevData) => ({ ...prevData, [name]: value }));
  }
  const [hidePass , setHidePass] = useState(false)
 const handleToChangeType = () => {
  setHidePass(!hidePass)
 }
  return (
   <>
    <div className="form__group field my-4">
      <input
        type={type === 'password' ? hidePass ? type = 'text' : type = 'password' : type}
        className="form__field"
        placeholder={placeHolder}
        name={name}
        id={id}
        required
        onChange={handleChange}
      />
      
      <label htmlFor={id} className="form__label">
        {labelName}
      </label>
   {  name === 'password' &&  <i className="icon pointer-cursor" onClick={handleToChangeType}>
      <Icon icon="iconoir:eye-solid" width="2rem" height="1.5rem" />
        </i>}
      
    </div>
   </>
  );
};

export default InputFeilds;
