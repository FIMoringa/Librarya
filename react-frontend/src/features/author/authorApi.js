import axios from "axios";

export const fetchAuthors = async () => {
  const { data } = await axios.get("http://localhost:3000/authors");
  return data;
};

export const fetchAuthor = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/authors/${id}`);
  return data;
};

export const createAuthor = async (formData) => {
  const { data } = await axios.post("http://localhost:3000/authors", formData);
  return data;
};

export const updateAuthor = async (id, formData) => {
  const { data } = await axios.put(
    "http://localhost:3000/authors/${id}",
    formData
  );
  return data;
};
