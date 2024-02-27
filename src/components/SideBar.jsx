import { useContext, useState } from "react";
import "../css/sideBar.css";
import { userContext } from "../ContextFile/Context";

const SideBar = ({ userData }) => {
  const [accordion, setAccordion] = useState("");
  const { showById, setShowById } = useContext(userContext);
  const handleShowAccordion = () => {
    setAccordion("Show");
  };

  const links = [
    { heading: "Name", option: userData.map((item) => [item.name, item.id]) },
    { heading: "Email", option: userData.map((item) => [item.email]) },
    { heading: "Gender", option: ["Male", "Female" , "Other"] },
    { heading: "Status", option: ["Active", "Inactive"] },
  ];

  const handleShowData = (e , selectedId) => {
    if(e.target.checked){
      setShowById(selectedId)
    }
      else{
        setShowById('')
      }
    
  };
  return (
    <div>
      <div className="bg-body-secondary vh-100 p-3">
        <div className="d-flex flex-row justify-content-between">
          <span className="text-dark fw-bold">Filter</span>
          <span className="fw-bold text-info">Favorite</span>
        </div>
        <hr />
        <div>
          {links && links.length > 0 ? (
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
                      onClick={handleShowAccordion}
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
                              type="checkbox"
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
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
