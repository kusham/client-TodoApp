import { notification } from "antd";
import axios from "axios";

const API = axios.create({ baseURL: "https://localhost:5000/api/auth" });

export const login = async (credentials, navigateToDashBoard) => {
  try {
    const { data } = await API.post("/login", credentials);
    console.log("🚀 ~ login ~ data:", data)
    if (data.token) {
      sessionStorage.setItem("user", JSON.stringify(data.user));
      sessionStorage.setItem("token", JSON.stringify(data.token));
      notification.success({
        message: "Success",
        description: "Logged in successfully",
      });
      navigateToDashBoard();
    }
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    notification.error({
      message: "Log in failed",
      description: error?.response?.data,
    });
  }
};

export const signUp = async (userData, navigateToLogin) => {
  const { confirmPassword, ...rest } = userData;
  try {
     await API.post("/register", rest);
    notification.success({
      message: "Success",
      description: "User registered successfully. Please log in.",
    });
    navigateToLogin();
  } catch (error) {
    console.log("🚀 ~ signUp ~ error:", error)
    notification.error({
      message: "Registration failed",
      description: "Please try again. If already registered, please log in.",
    });
  }
};
