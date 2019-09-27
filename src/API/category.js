import axios from "axios";

export const getCategories = async () => {
  const response = await axios.get("/categories");
  if (response && response.data) {
    return response.data.payload;
  }
};

export const addCategory = (name, description, imagePath, urlId) => {
  return axios.post("/api/v1/categories", {
    name,
    description,
    imagePath,
    urlId
  });
};

export const getCategoryByUrlId = categoryId => {
  return axios.get(`/api/v1/categories/${categoryId}`);
};
