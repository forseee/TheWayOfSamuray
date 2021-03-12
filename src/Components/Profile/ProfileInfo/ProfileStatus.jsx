import React, { useState, useEffect } from "react";

const ProfileStatus = (props) => {
  let [status, setStatus] = useState(props.status);
  let [editMode, setEditMode] = useState(false);

  const diactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const changeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={() => setEditMode(true)}>
            {props.status || "-----"}
          </span>
        </div>
      )}

      {editMode && (
        <div>
          <input
            onChange={changeStatus}
            autoFocus={true}
            onBlur={diactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
