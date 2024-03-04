import React from "react";

export default function RenderInputTypeText({
  label,
  displayName,
  onChangeHandler,
  ticket,
  class_name = "ticket-notes-title",
}) {
  return (
    <div>
      <label>
        {label}
        <input
          onChange={onChangeHandler}
          type="text"
          name={displayName}
          value={ticket[label.toLowerCase()]}
          className="ticket-notes-title"
        />
      </label>
    </div>
  );
}
