import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const showToast = (message , varient) => {
  toast(message, {
    position:  "bottom-right",
    autoClose:  2000,
    hideProgressBar:  true,
    type: varient, 
  });
};


export default showToast;


