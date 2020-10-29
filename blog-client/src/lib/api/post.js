import axios from "axios";

export const postWrite = ({ title, author, letter }) =>
  axios.post("/api/post/", { title, author, letter });
