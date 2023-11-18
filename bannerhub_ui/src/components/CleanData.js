import axios from "axios";

export const CleanData = async () => {
  try {
    const response = await axios.delete("http://localhost:8080/api/v1/banner/delete", {});
    console.log("Data cleaned successfully:", response.data);
  } catch (error) {
    console.error("Error cleaning data:", error);
  }
};