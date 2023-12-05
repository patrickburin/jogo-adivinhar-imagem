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
import { CiTrophy } from "react-icons/ci";

//material ui
import { Box, Modal } from "@mui/material";

const Game: React.FC = () => {
  const [flags, setFlags] = useState<Flag[]>([]);
  const [valueFlag, setValueFlag] = useState(0);
  const [flag, setFlag] = useState("src/images/brasil.png");

  //modal
  const [openFinish, setOpenFinish] = useState(false);
  const handleCloseFinish = () => {
    setOpenFinish(false);
    navigate("/");
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (valueFlag === 1) {
      setFlag("src/images/alemanha.svg");
    }
    if (valueFlag === 2) {
      setFlag("src/images/unitedStates.png");
    }
  }, [valueFlag]);

  useEffect(() => {
    axios
      .get("http://172.23.8.118:8080/startServer")
      .then(() => {
        console.log("Server iniciado com sucesso");
      })
      .catch((error) => {
        console.error("Erro ao iniciar o server:", error);
      });

    axios
      .get("http://localhost:8080/startClient")
      .then(() => {
        console.log("Cliente iniciado com sucesso");
      })
      .catch((error) => {
        console.error("Erro ao iniciar o cliente:", error);
      });

    axios
      .post("http://172.23.8.118:8080/postEntrarJogo")
      .then(() => {
        console.log("Server iniciado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao iniciar o serverrrr:", error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getOptions");
        if (Array.isArray(response.data)) {
          const flagsWithNames: Flag[] = response.data.map((name) => ({
            name,
            isCorrect: false,
          }));
          setFlags(flagsWithNames);
        } else {
          console.error("Resposta inesperada: não foram recebidos 5 strings.");
        }
      } catch (error) {
        console.error("Erro ao obter opções:", error);
      }
    };

    fetchData();
  }, [valueFlag, flags]);

  const handleOptionClick = async (nameFlag: string) => {
    const sendData = async (data: { name: string }) => {
      try {
        const response = await axios.post(
          "http://localhost:8080/postOption",
          data
        );
        console.log("Dados enviados com sucesso!", response);

        if (nameFlag === "Estados Unidos" && valueFlag === 2) {
          setOpenFinish(true);
          await axios.get("http://localhost:8080/fecharConexaoClient");
          await axios.get("http://172.23.8.118:8080/fecharConexaoServer");
        } else {
          setValueFlag((prev) => prev + 1);
        }
      } catch (error) {
        console.error("Erro ao enviar os dados:", error);
      }
    };

    if (
      (nameFlag === "Brasil" && valueFlag === 0) ||
      (nameFlag === "Alemanha" && valueFlag === 1) ||
      (nameFlag === "Estados Unidos" && valueFlag === 2)
    ) {
      toast.success("Acertou!");
      const data = { name: nameFlag };
      sendData(data);
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
            <img src={flag} alt="bandeira" />
          </div>
        </S.Flag>
        <S.Options>
          {flags.map((flag, index) => (
            <div className="divider" key={index}>
              <div
                className="option"
                onClick={() => handleOptionClick(flag.name)}
              >
                {flag.name}
              </div>
            </div>
          ))}
        </S.Options>
      </S.Content>
      <Toastify />
      <Modal
        open={openFinish}
        onClose={handleCloseFinish}
        style={{ zIndex: 9999 }}
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "none",
            borderRadius: "10px",
            boxShadow: 24,
            p: 1,
            outline: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          FIM DE JOGO, VOCÊ VENCEU! YOU ARE THE BEST, BRO
          <CiTrophy size={300} />
        </Box>
      </Modal>
    </C.Container>
  );
};

export default Game;
