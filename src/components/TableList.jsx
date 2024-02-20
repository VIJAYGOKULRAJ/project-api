import { useState } from "react";
import { Icon } from '@iconify/react';

const TableList = ({ record, column , onShowId}) => {
   
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped table-light">
                        <thead>
                            <tr className="text-center">
                                {column.map((item) => <th key={item.heading}>{item.heading}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {record && record.length ? (
                                record.map((item, index) => (
                                    <TableRowContent key={index} item={item} index={index} column={column} onShowId={(id) => onShowId(id, true)}/>
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


const TableRowContent = ({ item, column, index , onShowId}) => {
    const[value , setValue] = useState()
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleGetId = (id , showEditModel) => {
        onShowId(id , showEditModel)
    }
    return (
        <tr>
            {column.map((colItem) => {
                if (colItem.type === 'dropdown') {
                    return (
                        <td key={colItem.heading} className="text-center">
                            <select className="dropdown-btn" onChange={handleChange} value={value}>
                                {colItem.options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))} 
                            </select>
                        </td>
                    );
                }
                else if (colItem.type === 'icon'){
                    return(
                        <td key={colItem.heading} className="text-center">
                            <button type="button" onClick={()=>handleGetId(item.id , true)} className="border-0 bg-transparent" id={item.id}>
                            <Icon icon={colItem.iconType} />
                            </button>
                        </td>
                    )
                }
                else {
                    return (
                        colItem.value === '' ? <td key={colItem.heading} className="text-center">{index + 1}</td> : <td key={colItem.heading} className="text-center">{item[colItem.value]}</td>
                    );
                }
            })}
        </tr>
    )
};

export default TableList