import React from "react";

export default function RenderInputTypeText({
  label,
  inputName,
  value,
  onChangeHandler,
  ticket,
  class_name = "ticket-notes-title",
}) {
  return (
    <div className={class_name}>
      <label>
        {label}
        <input
          onChange={onChangeHandler}
          type="text"
          name={inputName}
          value={ticket[value]}
          // value={ticket[label.toLowerCase()]}
          // className={class_name}
        />
      </label>
    </div>
  );
}
