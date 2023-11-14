import "./DragAndDrop.css";
import UploadIcon from "../../Assets/i_upload.svg"
import React, { useState } from 'react';
import axios from "axios";

export default function DragAndDrop() {
    const [dragging, setDragging] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        setDragging(false);

        const files = e.dataTransfer.files;
        
        try {
            const formData = new FormData();
            formData.append("folder", files[0]);

            const response = await axios.post("http://localhost:8080/api/v1/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    };

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        // Handle selected files here

        console.log(files);
    };

    return (
        <form
      className={`dragAndDrop__container ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img src={UploadIcon} className="dnd__icon" alt="Upload Icon" />
      <p className="dnd__label">
        Drag and Drop files here or{' '}
        <label className="chooseFile">
          choose file
          <input
            type="file"
            className="fileInput"
            onChange={handleFileInputChange}
            multiple
          />
        </label>
      </p>
    </form>
    );
}