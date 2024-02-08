import React from "react";

export default function RenderDropDown({
  label,
  displayName,
  onChangeHandler,
  selectName,
  dataToMap,
  mapKey,
  value,
}) {
  return (
    <div>
      <label>
        {label}
        <div className="dropdown-box">
          <select
            onChange={onChangeHandler}
            name={selectName}
            id={selectName}
            defaultValue="default"
            autoComplete="off"
          >
            <option value="default">Choose a {displayName}</option>
            {dataToMap?.map((data) => {
              return (
                <option key={data?.[mapKey]} value={data?.[value]}>
                  {data?.[value]}
                </option>
              );
            })}
          </select>
        </div>
      </label>
    </div>
  );
}
