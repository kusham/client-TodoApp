export const ACTION_TYPES = {
  ADD: "ADD",
  EDIT: "EDIT",
};

export const MODAL_TYPES = {
  DELETE: "DELETE",
  VIEW: "VIEW",
};

export const TODO_STATUS = {
  Pending: 0,
  InProgress: 1,
  Completed: 2,
};

export const STATUS_COLORS = {
  [TODO_STATUS.Pending]: "orange",
  [TODO_STATUS.InProgress]: "blue",
  [TODO_STATUS.Completed]: "green",
};