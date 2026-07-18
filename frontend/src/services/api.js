import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-careers-roadmap.onrender.com",
});

export const uploadResume = async (
  file,
  jobRole,
  jobDescription
) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("jobRole", jobRole);
  formData.append("jobDescription", jobDescription);

  const response = await API.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};