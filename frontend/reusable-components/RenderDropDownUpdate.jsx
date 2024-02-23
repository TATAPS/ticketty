import React from "react";

export default function RenderDropDownUpdate({
  label,
  displayName,
  onChangeHandler,
  selectName,
  dataToMap,
  mapKey,
  value,
  defaultValue,
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
            defaultValue={defaultValue}
            autoComplete="off"
          >
            <option value={defaultValue}>{defaultValue}</option>
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
