export const FormFields = [
  {
    id: "modelName",
    label: "Model Name",
    type: "input",
    placeholder: "Enter Model Name",
  },
  {
    id: "modelType",
    label: "Model Type",
    type: "select",
    placeholder: "Select",
    options: [
      { label: "Extaction", value: "extraction" },
      { label: "Classification", value: "clasification" },
      { label: "Detection", value: "detection" },
    ],
  },
  {
    id: "llm",
    label: "LLM",
    type: "select",
    placeholder: "Neural (recommended)",
    options: [{ label: "Neural", value: "neural" }],
  },
  {
    id: "modelDescription",
    label: "Model Description",
    type: "textarea",
    placeholder: "Enter Model Description",
  },
];

export const ModelTypeOptions = [
  { label: "Extaction", value: "extraction" },
  { label: "Classification", value: "clasification" },
  { label: "Detection", value: "detection" },
];
