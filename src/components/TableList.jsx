import { useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { userContext } from "../ContextFile/Context";
import { DeleteApi } from "../Axios/ApiCall";
const TableList = ({ record, column }) => {
  const { getById, setgetById, setModalShow } = useContext(userContext);

  return (
    <>
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
}) => {
  const { getById, setgetById, setModalShow } = useContext(userContext);
  const [value, setValue] = useState();

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  const handleGetId = async(id, showModel) => {
    console.log(id,showModel,"-------------")
    await setgetById({ ...getById, id: id , [showModel ? 'openModel' : 'delete']: showModel});
    setValue(id)
    console.log(value,"value------")
    setModalShow(showModel)
    console.log(getById,"-------------")
    //DeleteApi(id)
 
  };

  return (
    <tr>
      {column.map((colItem) => {
        if (colItem.type === "dropdown") {
          return (
            <td key={colItem.heading} className="text-center">
              <select
                className="dropdown-btn"
                //onChange={handleChange}
                value={item.value}
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
