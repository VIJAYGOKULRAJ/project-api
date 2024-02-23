import { useState } from "react";
import "../css/sideBar.css";

const SideBar = () => {
  const [accordion, setAccordion] = useState(true);

  const handleShowAccordion = () => {
    setAccordion(!accordion);
  };
  
    const links = [
    { heading: "Name" },
    { heading: "Email" },
    { heading: "Gender" },
    { heading: "Status" },
    {
      heading: "Status Request",
      option: [
        "Approved",
        "Denied",
        "Pending",
        "Additional Details Added",
        "In Review",
      ],
    },
  ];

  return (
    <div>
      <div className="bg-body-secondary vh-100 p-3">
        <div className="d-flex flex-row justify-content-between">
          <span className="text-dark fw-bold">Filter</span>
          <span className="fw-bold text-info">Favorite</span>
        </div>
        <hr  />
        <div>
          {links&& links.length > 0?links.map((content, index) => (
            <div className="accordion" id={`accordion-${index}`} key={index}>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                   className="accordion-button"
                   type="button"
                   data-bs-toggle="collapse"
                   data-bs-target={`#collapse-${index}`}
                   aria-expanded={accordion ? 'true' : 'false'}
                   aria-controls={`collapse-${index}`}
                   onClick={handleShowAccordion}
                  >
                    <div className="fw-bold ">{content.heading}</div>
                  </button>
                </h2>
                <div
                  id={`collapse-${index}`}
                  className="accordion-collapse collapse show"
                  data-bs-parent={`#accordion-${index}`}
                >
                  <div className="accordion-body p-0">
                    {content?.option?.map((val, index) => (
                      <div className="d-flex flex-row algin-items-center px-2">
                        <div className="py-3">
                          <input
                            type="checkbox"
                            name=""
                            id={`checkbox-${index}`}
                          />
                        </div>
                        <label
                          className="fw-bold py-3 px-2 text-start"
                          htmlFor={`checkbox-${index}`}
                        >
                          {val}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )) : <></>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
