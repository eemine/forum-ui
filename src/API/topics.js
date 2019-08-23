import axios from "axios";

export const GetTopics = () => {
  return axios.get("/api/v1/topics");
};

export const AddTopic = (title, categoryId) => {
  return axios.post("/api/v1/topics", { title, categoryId });
};

export const GetTopicById = topicId => {
  return axios.get(`/api/v1/topics/${topicId}`);
};

export const GetTopicComments = topicId => {
  return axios.get(`/api/v1/topics/${topicId}/comments`);
};

export const AddTopicComment = (text, topicId) => {
  return axios.post(`/api/v1/topics/${topicId}/comments`, {
    text
  });
};
