import styled from 'styled-components';

export const StyledAppsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 300px;
  padding-right: 20px;
`;

export const StyledAppItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 3px;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background-color: rgb(40, 40, 40);
  transition: background-color 400ms ease;

  &:hover {
    background-color: rgba(40, 40, 40, 0.6);
  }
`;

export const StyledApp = styled.li`
  display: flex;
  justify-content: center;
  width: 60px;
  cursor: pointer;
`;

export const StyledIconsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledNotification = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(15%, -15%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 8px;
  background-color: firebrick;
`;
