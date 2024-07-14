import React from "react";
import { MODAL_TYPES } from "./Constants";
import ViewModal from "./Modals/ViewModal";
import DeleteModal from "./Modals/DeleteModal";

const TodoModal = ({ isModalOpen, handleOk, type, todoData }) => {
  const renderModal = () => {
    switch (type) {
      case MODAL_TYPES.VIEW:
        return (
          <ViewModal
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            todoData={todoData}
          />
        );
      case MODAL_TYPES.DELETE:
        return (
          <DeleteModal
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            todoData={todoData}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderModal()}</>;
};

export default TodoModal;
