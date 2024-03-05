import {commonFileComponents} from '../Constant.js'
import TableList from "../components/TableList"




const UsersForm = ({userData ,  handleDelete , handleGet }) => {
  
  
  return (
    <div>
<TableList record={userData} column={commonFileComponents.userForm.column}  handleDelete={handleDelete} handleGet={handleGet}/>
    </div>
  )
}

export default UsersForm