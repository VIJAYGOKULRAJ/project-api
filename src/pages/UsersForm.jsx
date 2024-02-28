import { useEffect, useState } from "react"
import TableList from "../components/TableList"
import axios from 'axios';



const UsersForm = ({userData ,  handleDelete , handlePut }) => {
  
    const column = [
        {heading : 'Edit' , type : 'icon' , iconType : 'solar:pen-2-bold-duotone' , btnType : 'edit'},
        {heading : 'Name' , value : 'name' },
        {heading : 'Email' , value : 'email'},
        {heading : 'Gender' , value : 'gender'},
        {heading: 'Status', value: 'status', type: 'dropdown', options: ['Active','Inactive'] },
        {heading : 'Delete' , type : 'icon' , iconType : 'material-symbols:delete-outline' , btnType : 'delete'},

    ]
  return (
    <div>
<TableList record={userData} column={column}  handleDelete={handleDelete} handlePut={handlePut}/>
    </div>
  )
}

export default UsersForm