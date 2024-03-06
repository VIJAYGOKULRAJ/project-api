import { useState, useContext, useEffect } from "react";
import { Icon } from "@iconify/react";
import { userContext } from "../ContextFile/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { commonFileComponents } from "../Constant.js";

const TableList = ({ record, column, handleDelete, handleGet ,  setModalShow  }) => {
  const { getById, setgetById } = useContext(userContext);
  const setValueInParent = (id, modelShow) => {
    setgetById({
      ...getById,
      id: id,
      [modelShow ? "openModel" : "delete"]: modelShow,
    });
    setModalShow(modelShow);
  };
  useEffect(() => {
    getById.id && getById.delete === false && handleDelete(getById.id);
    getById.id && getById.openModel === true && handleGet(getById.id);
  }, [getById]);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
      />
      <div className="row">
        <div className="col-12">
          <table className="table table-striped table-light">
            <thead>
              <tr className="text-center">
                {column ? (
                  Array.isArray(column) &&
                  column.length > 0 &&
                  column.map((item) => (
                    <th key={item.heading}>{item.heading}</th>
                  ))
                ) : (
                  <th>{commonFileComponents?.table?.noRecordFound}</th>
                )}
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
                    {commonFileComponents?.table?.noRecordFound}
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

const TableRowContent = ({ item, column, index, setValueInParent }) => {
  const handleGetId = (id, showModel) => {
    setValueInParent(id, showModel);
  };

  return (
    <tr>
      {column &&
        Array.isArray(column) &&
        column.length > 0 &&
        column.map((colItem) => {
          if (colItem.type === "dropdown") {
            return (
              <td key={colItem?.heading} className="text-center">
                <select className="dropdown-btn" value={item?.value}>
                  {colItem?.options &&
                    Array.isArray(colItem.options) &&
                    colItem.options.length > 0 &&
                    colItem.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              </td>
            );
          } else if (colItem?.type === "icon") {
            return (
              <td key={colItem?.heading} className="text-center">
                <button
                  type="button"
                  onClick={() =>
                    handleGetId(item?.id, colItem?.btnType === "edit")
                  }
                  className="border-0 bg-transparent"
                  id={item?.id}
                >
                  <Icon icon={colItem?.iconType} />
                </button>
              </td>
            );
          } else {
            return colItem.value === "" ? (
              <td key={colItem?.heading} className="text-center">
                {index + 1}
              </td>
            ) : (
              <td key={colItem?.heading} className="text-center">
                {item[colItem?.value]}
              </td>
            );
          }
        })}
    </tr>
  );
};

export default TableList;
