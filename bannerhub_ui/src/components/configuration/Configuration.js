import "./Configuration.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Configuration() {
  const [url, setUrl] = useState("");

  const handleLinkChange = (event) => {
    setUrl(event.target.value);
  };

  const updateData = async () => {
    try {
      const formData = new FormData();
      formData.append("url", url);

      const updateResponse = await axios.put(
        "http://localhost:8080/api/v1/banner/update",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Update response:", updateResponse.data);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const downloadFile = async () => {
    try {
      const exportResponse = await axios.get(
        "http://localhost:8080/api/v1/banner/export",
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([exportResponse.data], {
        type: "application/octet-stream",
      });

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "Export.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("Export response:", exportResponse.data);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    await updateData();
    await downloadFile();
  };

  return (
    <div className="configuration">
      <form className="configuration__form">
        <div className="container">
          <div className="title">
            <h2>Configuration</h2>
          </div>
          <div className="link__input">
            <input
              type="text"
              placeholder="Link"
              value={url}
              onChange={handleLinkChange}
            />
          </div>
        </div>
        <div className="sendBtn">
          <button onClick={handleDownload}>Download</button>
        </div>
      </form>
    </div>
  );
}
