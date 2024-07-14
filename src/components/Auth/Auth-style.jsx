import { Button } from "antd";
import styled from "styled-components";


export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  .ant-card-body {
    padding: 0px 24px 24px 24px;
  }
`;

export const CardTitle = styled.div`
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
.anticon {
    font-size: 24px;
    
}
`;

export const CardContent = styled.div`
min-width: 300px;

`;

export const CardAction = styled.div`
display: flex;
justify-content: center;
span {
    margin-left: 5px;
}
`;

export const AuthButton = styled(Button)`
width: 100%;
`;
