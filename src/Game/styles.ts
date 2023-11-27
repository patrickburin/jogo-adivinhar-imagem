import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  width: 60%;
  height: 85%;
  border-radius: 10px;
  padding: 10px;
  gap: 5px;

  .title {
    display: flex;
    padding: 0 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Flag = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  gap: 5px;

  .text {
    text-align: center;
    font-size: 34px;
  }

  .flag {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .divider {
    display: flex;
    justify-content: center;
  }

  .option {
    display: flex;
    align-items: center;
    width: 70%;
    justify-content: center;
    padding: 2px;
    font-size: 28px;
    border: 2px solid #000000;
    background-color: #00ced1;
    color: #ffffff;
    border-radius: 50px;
    cursor: pointer;
  }
`;
