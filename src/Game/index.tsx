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

//react icons
import { FaQuestion } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Game: React.FC = () => {
  const [flags, setFlags] = useState<Flag[]>([]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const flagsData = [
    { name: "Bandeira 1", isCorrect: true },
    { name: "Bandeira 2", isCorrect: false },
    { name: "Bandeira 3", isCorrect: false },
    { name: "Bandeira 4", isCorrect: false },
  ];

  const shuffleFlags = (flags: any) => {
    return flags.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    // Lógica para buscar as bandeiras do backend
    // Suponhamos que você fez uma requisição e recebeu flagsData do backend
    const shuffledFlags = shuffleFlags(flagsData);
    setFlags(shuffledFlags);
  }, []);

  // const sendAnswerToBackend = async (isCorrect: boolean) => {
  //   try {
  //     const response = await new Promise((resolve) => {
  //       // Simulação de requisição ao backend com atraso de 2 segundos
  //       setTimeout(() => {
  //         // Aqui normalmente faria a requisição ao backend
  //         // Simulando uma resposta do backend
  //         const backendResponse = { success: true }; // Simulação de uma resposta de sucesso

  //         resolve(backendResponse);
  //       }, 2000);
  //     });

  //     // Aqui você poderia processar a resposta do backend, se necessário
  //     console.log("Resposta do backend:", response);

  //     return response; // Retornar a resposta do backend se for útil
  //   } catch (error) {
  //     console.error("Erro ao enviar resposta ao backend:", error);
  //     throw error;
  //   }
  // };

  const fetchFlagsFromBackend = async () => {
    return new Promise((resolve) => {
      // Simulação de requisição ao backend com atraso de 2 segundos
      setTimeout(() => {
        const flagsFromBackend = [
          { name: "Bandeira 1", isCorrect: true },
          { name: "Bandeira 2", isCorrect: false },
          { name: "Bandeira 3", isCorrect: false },
          { name: "Bandeira 4", isCorrect: false },
        ];
        resolve(flagsFromBackend);
      }, 2000);
    });
  };

  const sendAnswerToBackend = async (isCorrect: boolean) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const backendResponse = { success: true }; // Simulação de uma resposta de sucesso
        resolve(backendResponse);
      }, 1000);
    });
  };

  const handleOptionClick = async (isCorrect: boolean) => {
    if (isCorrect) {
      try {
        const response = await sendAnswerToBackend(isCorrect);
        toast.success("Resposta correta!");
        const shuffledFlags = shuffleFlags(flagsData);
        setFlags(shuffledFlags);
      } catch (error) {
        // Tratar erros se a requisição ao backend falhar
        console.error("Erro ao enviar resposta correta ao backend:", error);
      }
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
          {flags.map((flag, index) => (
            <div className="divider" key={index}>
              <div
                className="option"
                onClick={() => handleOptionClick(flag.isCorrect)}
              >
                {flag.name}
              </div>
            </div>
          ))}
        </S.Options>
      </S.Content>
      <Toastify />
    </C.Container>
  );
};

export default Game;
