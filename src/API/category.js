import axios from "axios";

export const GetCategories = () => {
  return axios.get("/api/v1/categories");
};

export const AddCategory = (name, description, imagePath, urlId) => {
  return axios.post("/api/v1/categories", {
    name,
    description,
    imagePath,
    urlId
  });
};

export const GetCategoryByUrlId = categoryId => {
  return axios.get(`/api/v1/categories/${categoryId}`);
};
