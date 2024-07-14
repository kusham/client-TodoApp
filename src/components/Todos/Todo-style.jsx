import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { Form } from "formik";
import styled from "styled-components";

export const TodoListContainer = styled.div``;
export const TopRowTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableTile = styled.h1`
  font-size: 24px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
export const CreateButton = styled(Button)`
  margin-bottom: 10px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1px;
`;

export const BlueEditIcon = styled(EditOutlined)`
  color: blue;
`;

export const CustomModal = styled(Modal)`
  .ant-btn-default {
    display: none;
  }
`;

export const FormContainer = styled(Form)``;

export const DeleteModalContent = styled.div`
  b {
    color: red;
  }
  span {
    font-weight: bold;
  }
`;

export const ViewContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const InfoItem = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Value = styled.span`
  margin-left: 10px;
`;
