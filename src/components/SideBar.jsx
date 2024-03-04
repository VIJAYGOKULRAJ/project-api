import { useContext, useState } from "react";
import "../css/sideBar.css";
import { userContext } from "../ContextFile/Context";

const SideBar = ({ userData }) => {
  
  const { showById, setShowById } = useContext(userContext);
  

  const links = [
    { heading: "Name", option: userData.map((item) => [item.name, item.id]) },
    { heading: "Email", option: userData.map((item) => [item.email , item.id]) },
  ];

  const handleShowData = (e , selectedId) => {
    if(e.target.checked){
      setShowById(selectedId)
    }
      else{
        setShowById('')
      }
    
  };
  const handleUncheck = () => {
    setShowById(null);
  }
  return (
    <div className="overflow-scroll">
      <div className=" bg-body-secondary vh-100  p-3">
        <div className="d-flex flex-row justify-content-between ">
          <span className="text-dark fw-bold">Filter</span>
          <span className="fw-bold text-info">Favorite</span>
        </div>
        <hr />
        <div className="accordian-height">
          {links && links.length > 0 && (
            links.map((content, index) => (
              <div className="accordion" id={`accordion-${index}`} key={index}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${index}`}
                      aria-expanded={false}
                      aria-controls={`collapse-${index}`}
                    
                    >
                      <div className="fw-bold ">{content.heading}</div>
                    </button>
                  </h2>
                  <div
                    id={`collapse-${index}`}
                    className={`accordion-collapse collapse`}
                    data-bs-parent={`#accordion-${index}`}
                    
                  >
                    <div className="accordion-body p-0">
                      {content?.option?.map((val) => (
                        <div
                          className="d-flex flex-row algin-items-center px-2"
                          
                        >
                          <div className="py-3">
                            <input
                              type="radio"
                              name=""
                              id={`checkbox-${val[1]}`}
                              onChange={(e) => handleShowData(e , val[1])}
                              checked={val[1]===showById}
                            />
                          </div>
                          <label
                            className="fw-bold py-3 px-2 text-start overflow-scroll"
                            htmlFor={`checkbox-${val[1]}`}
                          >
                            {val[0]}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
         <div className="row">
         <div className="col-6">
         <button onClick={handleUncheck} className="button-28 ">Reset</button>
         </div>
        
         </div>
      </div>
    </div>
  );
};

export default SideBar;
