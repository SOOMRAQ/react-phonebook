import styled from 'styled-components';

export const StyledDock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-bottom: 52px;
  width: 200px;
  height: 60px;
  background-color: rgb(40, 40, 40);
  border-radius: 20px;
`;

export const StyledCallToAction = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(0%, -100%);
`;

export const StyledLine = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  height: 60%;
  width: 1px;
  background-color: rgba(250, 250, 250, 0.5);
`;
