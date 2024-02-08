import React from "react";

export default function RenderInputTypeText({
  label,
  displayName,
  onChangeHandler,
  ticket,
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
        />
      </label>
    </div>
  );
}
