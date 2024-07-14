import { notification } from "antd";
import axios from "axios";

const API = axios.create({ baseURL: "https://localhost:5000" });

const handleTokenExpiration = () => {
  window.location.replace("/Unauthorized");
};

API.interceptors.request.use(
  (config) => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      handleTokenExpiration();
    }
    return Promise.reject(error);
  }
);

export const getAllTodos = async () => {
  try {
    const { data } = await API.get("/api/todo/all");
    console.log("🚀 ~ getAllTodos ~ data:", data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addTask = async (todoData) => {
  todoData["userId"] = JSON.parse(sessionStorage.getItem("user")).id;
  todoData.status = parseInt(todoData.status);
  console.log("🚀 ~ addTask ~ todoData:", todoData)
  try {
    const { data } = await API.post("/api/todo", todoData);
    if (data) {
      notification.success({
        message: "Success",
        description: "Task added successfully",
      });
    }
  } catch (error) {
    console.log(error);
    notification.error({
      message: "Error",
      description: "Failed to add Task",
    });
  }
};

export const editTask = async (todoData, id) => {
  try {
    await API.put(`/api/todo/${id}`, todoData);
      notification.success({
        message: "Success",
        description: "Task updated successfully",
      });
  } catch (error) {
    console.log(error);
    notification.error({
      message: "Error",
      description: "Failed to update Task",
    });
  }
};

export const deleteTask = async (id) => {
  try {
    await API.delete(`/api/todo/${id}`);
    notification.success({
      message: "Success",
      description: "Task deleted successfully",
    });
  } catch (error) {
    console.log(error);
    notification.error({
      message: "Error",
      description: "Failed to delete Task",
    });
  }
};

export const searchTask = async (filterBy) => {
  console.log("🚀 ~ searchTask ~ filterBy:", filterBy)
  try {
    const { data } = await API.post("/api/todo/filter", filterBy);
    return data;
  } catch (error) {
    console.log(error);
  }
}