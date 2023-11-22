interface Flag {
  name: string;
  isCorrect: boolean;
}

//components
import Toastify from "../Toastify";

//styles
import * as S from "./styles";
import * as C from "../Home/styles";

//react toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//react
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//react icons
import { FaQuestion } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Game: React.FC = () => {
  const [flags, setFlags] = useState<Flag[]>([]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/getOptions")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter opções:", error);
      });
  }, [flags]);

  // const flagsData = [
  //   { name: "Bandeira 1", isCorrect: true },
  //   { name: "Bandeira 2", isCorrect: false },
  //   { name: "Bandeira 3", isCorrect: false },
  //   { name: "Bandeira 4", isCorrect: false },
  // ];

  // const sendAnswerToBackend = async (isCorrect: boolean) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const backendResponse = { success: true }; // Simulação de uma resposta de sucesso
  //       resolve(backendResponse);
  //     }, 1000);
  //   });
  // };

  const handleOptionClick = async (isCorrect: boolean) => {
    if (isCorrect) {
      toast.success("Acertou!");
    } else {
      toast.error("Errou! Tente novamente.");
    }
  };

  return (
    <C.Container>
      <S.Content>
        <div className="title">
          <h1>
            Qual é a origem da bandeira <FaQuestion />
          </h1>
          <AiOutlineCloseCircle
            size={50}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
        </div>
        <S.Flag>
          <div className="flag">
            <img src="src/images/australia.png" alt="bandeira" />
          </div>
        </S.Flag>
        <S.Options>
          <button
            onClick={() => {
              setFlags([
                { name: "Bandeira 1", isCorrect: true },
                { name: "Bandeira 2", isCorrect: false },
                { name: "Bandeira 3", isCorrect: false },
                { name: "Bandeira 4", isCorrect: false },
              ]);
            }}
          >
            aaaaaaaaaa
          </button>
          {/* {flags.map((flag, index) => (
            <div className="divider" key={index}>
              <div
                className="option"
                onClick={() => handleOptionClick(flag.isCorrect)}
              >
                {flag.name}
              </div>
            </div>
          ))} */}
        </S.Options>
      </S.Content>
      <Toastify />
    </C.Container>
  );
};

export default Game;
