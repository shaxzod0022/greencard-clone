import React, { useState } from "react";
import { style } from "../../util/style";

const inputs = [
  {
    label: "Last/Family Name",
    name: "lastName",
    type: "text",
    label2: null,
    name2: null,
    type2: null,
  },
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    label2: "No First Name",
    name2: "noFirstName",
    type2: "checkbox",
  },
  {
    label: "Middle Name",
    name: "middleName",
    type: "text",
    label2: "No Middle Name",
    name2: "noMiddleName",
    type2: "checkbox",
  },
];

const PersonalInfo = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        if (name === "noMiddleName" && checked) {
          return { ...prev, [name]: checked, middleName: "" };
        }
        return { ...prev, [name]: checked };
      });
    } else {
      setFormData((prev) => {
        if (name === "middleName" && value) {
          return { ...prev, [name]: value, noMiddleName: false };
        }
        return { ...prev, [name]: value };
      });
    }
  };
  return (
    <div className={`w-full rounded-md`}>
      <h2 className={`${style.h2} w-full text-center mb-2`}>
        Part One - Entrant Information
      </h2>
      <div className={`w-full`}>
        <p className={`${style.p} rounded-t-md p-3 bg-gray-200`}>1. Name</p>
        <div
          className={`${style.flexBetween} sm:gap-2 gap-6 !items-start border-2 w-full p-7`}
        >
          {inputs.map((item, idx) => (
            <div
              key={idx}
              className={`${style.flexCol} justify-start lg:w-[30%] sm:w-[45%] w-full gap-2 !items-start`}
            >
              <label className={`w-full ${style.p}`}>{item.label}</label>
              <input
                className="border-2 w-full outline-none rounded-md p-2"
                type={item.type}
                name={item.name}
                onChange={handleChange}
                value={formData[item.name] || ""}
                disabled={item.name === "middleName" && formData.noMiddleName}
              />
              {item.type2 && (
                <div className={`flex items-center gap-2`}>
                  <input
                    className="cursor-pointer"
                    name={item.name2}
                    type={item.type2}
                    checked={formData[item.name2] || false}
                    onChange={handleChange}
                  />
                  <label>{item.label2}</label>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
