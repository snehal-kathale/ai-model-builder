import React, { useState } from "react";
import { FormFields } from "../constants/FieldsOfCreateModal";
import { modelData } from "../constants/modelData";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    modelName: "",
    modelType: "",
    llm: "",
    modelDescription: "",
  });

  const handleClose = () => {
    setFormData({
      modelName: "",
      modelType: "",
      llm: "",
      modelDescription: "",
    });
    onClose();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const createdOn = new Date().toISOString().split("T")[0];

    const newEntry = {
      name: formData.modelName,
      id: `#${Math.floor(Math.random() * 10000000)}`, // Generating a random ID, adjust if necessary
      type: formData.modelType,
      description: formData.modelDescription,
      createdOn,
      lastTrainedOn: createdOn, // Assuming the lastTrainedOn is the same as createdOn initially
      status: "active", // Default status, adjust if needed
    };
    const updatedTableData = [newEntry];
    localStorage.setItem("tableData", JSON.stringify(updatedTableData));
    modelData.unshift(newEntry);

    handleClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="w-[439px] p-0 bg-white rounded-lg shadow-lg">
        <div className="px-5 py-4 border-b border-blue-600 flex justify-between">
          <h2 className="text-black text-lg font-semibold ">
            Create new model
          </h2>
          <img
            className="cursor-pointer"
            src="../icons/Outline-x.svg"
            alt="close"
            onClick={handleClose}
          />
        </div>
        <div className="flex flex-col gap-5 p-5">
          {FormFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-[5px]">
              <label className="text-sm text-gray-600">{field.label}</label>
              {field.type === "input" && (
                <input
                  type="text"
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="h-10 px-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              {field.type === "select" && (
                <select
                  className="h-10 px-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#fff]"
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {field.options.map((opt) => (
                    <option>{opt.label}</option>
                  ))}
                </select>
              )}
              {field.type === "textarea" && (
                <textarea
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="h-[101px] px-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          ))}
          <div className="flex gap-3">
            <button
              className="flex-1 h-9 bg-[#E7E6FA] text-[#4F46E5] hover:bg-[#E7E6FA]/90 rounded-[10px]"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="flex-1 h-9 bg-primary text-white hover:bg-blue-700 rounded-[10px]"
              onClick={(e) => handleSave(e)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
