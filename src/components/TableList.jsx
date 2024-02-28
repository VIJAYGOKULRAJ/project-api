import { useState, useContext, useEffect } from "react";
import { Icon } from "@iconify/react";
import { userContext } from "../ContextFile/Context";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/table.css'


const TableList = ({ record, column ,  handleDelete , handlePut}) => {
  const { getById, setgetById,  setModalShow } = useContext(userContext);
  const setValueInParent = (id , modelShow) => {
    setgetById({...getById , id : id , [modelShow ? 'openModel' : 'delete'] : modelShow})
    setModalShow(modelShow)
  };
  useEffect(()=>{ 
    getById.id &&  getById.delete === false && handleDelete(getById.id)  
    getById.id && getById.openModel === true && handlePut(getById.id)
  },[getById])

  return (
    <>
     <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={true} />
      <div className="row">
        <div className="col-12">
          <table className="table table-striped table-light">
            <thead>
              <tr className="text-center">
                {column.map((item) => (
                  <th key={item.heading}>{item.heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {record && record.length ? (
                record.map((item, index) => (
                  <TableRowContent
                    key={index}
                    item={item}
                    index={index}
                    column={column}
                    setValueInParent={setValueInParent} 
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={column.length} className="text-center">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const TableRowContent = ({
  item,
  column,
  index,
  setValueInParent, 
}) => {
  const { getById, setgetById, setModalShow } = useContext(userContext);

  const handleGetId =  (id, showModel) => {
    setValueInParent(id , showModel); 
  };
  const [value, setValue] = useState();
 const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <tr>
      {column.map((colItem) => {
        if (colItem.type === "dropdown") {
          return (
            <td key={colItem.heading} className="text-center">
              <select
                className="dropdown-btn"
                value={item.value}
                onChange={handleChange}
              >
                {colItem.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </td>
          );
        } else if (colItem.type === "icon") {
          return (
            <td key={colItem.heading} className="text-center">
              <button
                type="button"
                onClick={() => handleGetId(item.id, colItem.btnType === 'edit' )}
                className="border-0 bg-transparent"
                id={item.id}
              >
                <Icon icon={colItem.iconType} />
              </button>
            </td>
          );
        } else {
          return colItem.value === "" ? (
            <td key={colItem.heading} className="text-center">
              {index + 1}
            </td>
          ) : (
            <td key={colItem.heading} className="text-center">
              {item[colItem.value]}
            </td>
          );
        }
      })}
    </tr>
  );
};

export default TableList;
