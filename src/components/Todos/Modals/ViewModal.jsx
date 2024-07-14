import React from "react";
import dayjs from "dayjs";
import { Badge } from "antd";
import {
  CustomModal,
  InfoItem,
  Label,
  Value,
  ViewContainer,
} from "../Todo-style";
import { STATUS_COLORS, TODO_STATUS } from "../Constants";


const ViewModal = ({ isModalOpen, handleOk, todoData }) => {
  return (
    <CustomModal
      title={todoData?.title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleOk}
      closeIcon={false}
    >
      <ViewContainer>
        {Object.keys(todoData).map((key, index) => {
          let value = todoData[key];

          // Format dueDate
          if (key === "dueDate" || key === "createdAt") {
            value = dayjs(value).format("YYYY MMM DD");
          }

          // Format status with Badge
          if (key === "status") {
            value = (
              <Badge
                color={STATUS_COLORS[todoData.status]}
                text={Object.keys(TODO_STATUS).find(
                  (statusKey) => TODO_STATUS[statusKey] === todoData.status
                )}
              />
            );
          }

          return (
            index !== 0 && (
              <InfoItem key={index}>
                <Label>{key.replace(/^\w/, (c) => c.toUpperCase())}</Label>
                <Value>{value}</Value>
              </InfoItem>
            )
          );
        })}
      </ViewContainer>
    </CustomModal>
  );
};

export default ViewModal;
