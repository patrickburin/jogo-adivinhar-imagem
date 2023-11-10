import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  color: #00ced1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  border-radius: 10px;
  width: 60%;
  height: 85%;
  padding: 10px;
  gap: 5px;

  .content {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
  }

  h1 {
    text-align: center;
  }

  hr {
    width: 100%;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #ffffff;

  .option {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 30px;
    border: 2px solid #000000;
    background-color: #00ced1;
    border-radius: 50px;
    cursor: pointer;
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;

  .title {
    font-weight: bold;
    text-align: center;
    font-size: 32px;
    color: #00ced1;
  }

  .explanation {
    display: flex;
    font-size: 22px;
    flex-direction: column;
    gap: 5px;
  }

  hr {
    width: 100%;
  }
`;
