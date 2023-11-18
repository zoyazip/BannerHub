import "./DragAndDrop.css";
import UploadIcon from "../../Assets/i_upload.svg";
import React, { useState } from 'react';
import axios from "axios";

export default function DragAndDrop( {setBannersData}) {
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
        handleFile(e.dataTransfer.files);
    };

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        handleFile(files);
    };

    const handleFile = async (files) => {
        try {
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append("folder", files[i]);
            }

            const response = await axios.post("http://localhost:8080/api/v1/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(response);
            handleData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleData = async () => {
        try {
            const bannersResponse = await axios.get("http://localhost:8080/api/v1/banner/all");
            const bannersData = bannersResponse.data;
    
            setBannersData(bannersData);
        } catch (error) {
            console.log(error);
        }
    }
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
