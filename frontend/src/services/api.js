import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
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