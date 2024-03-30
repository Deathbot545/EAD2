import React from "react";
import "./FileUpload.scss";
import { uploadIcon } from "../../constants/assets";

function FileUpload() {
  return (
    <div className="FileUpload w-100">
      <span>Upload your payment slip</span>
      <input type="file" id="fi" className="d-none" />
      <label htmlFor="fi">
        Click here to upload payment slip
        <img src={uploadIcon} alt="uploadIcon" className="uploadIcon" />
      </label>
    </div>
  );
}

export default FileUpload;
