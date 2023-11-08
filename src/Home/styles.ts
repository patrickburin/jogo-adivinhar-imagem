import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  color: #d3d3d3;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #666666;
  border: 2px solid #a7a7a7;
  border-radius: 10px;
  width: 60%;
  height: 80%;
  padding: 10px;
  gap: 5px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .subtitle {
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 30px;
    gap: 15px;
  }

  .help {
    font-size: 20px;
    padding: 2px 5px;
    border-radius: 10px;
    background-color: #d3d3d3;
    color: #000000;
    cursor: pointer;
  }

  h1 {
    text-align: center;
  }

  hr {
    width: 100%;
  }

  .footer {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .option {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: 3px solid #a7a7a7;
    border-radius: 10px;
    gap: 10px;
  }

  .divider {
    display: flex;
    gap: 10px;
  }

  .country {
    background-color: #231c8d;
  }

  .football {
    background-color: #94ad0d;
  }

  .film {
    background-color: #ff7f50;
  }

  .actor {
    background-color: #6959cd;
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  font-family: "Roboto", sans-serif;

  .title {
    font-weight: bold;
    text-align: center;
    font-size: 32px;
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
