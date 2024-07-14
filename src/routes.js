import HOC from "./Layouts/HOC";
import Layout from "./Layouts/Layout";
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import CreateTodo from "./components/Todos/CreateTodo";
import EditTodo from "./components/Todos/EditTodo";
import TodoList from "./components/Todos/TodoList";

export const routes = [
  {
    path: "/",
    component: <LogIn />,
  },
  {
    path: "/signUp",
    component: <SignUp />,
  },
  {
    path: "/todos",
    component: Layout(HOC(TodoList)),
  },
  {
    path: "todo/create",
    component: Layout(HOC(CreateTodo)),
  },
  {
    path: "/todo/edit/:id",
    component: Layout(HOC(EditTodo)),
  },
  {
    path: "/Unauthorized",
    component: <h1>Unauthorized</h1>,
  },
  {
    path: "*",
    component: <h1>404 Not Found</h1>,
  }
];
