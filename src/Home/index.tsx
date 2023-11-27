//react
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//styles
import * as C from "./styles";

//react icons
import { FaQuestion } from "react-icons/fa6";

//material ui
import { Box, Modal } from "@mui/material";

//components
import SwiperComponent from "../SwiperComponet";

const Home = () => {
  //modal de informações
  const [openInfo, setOpenInfo] = useState(false);
  const handleCloseInfo = () => setOpenInfo(false);

  //modal de tecnologias
  const [openTech, setOpenTech] = useState(false);
  const handleCloseTech = () => setOpenTech(false);

  //navigation
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/game");
  };

  return (
    <C.Container>
      <C.Content>
        <h1>
          Qual a bandeira <FaQuestion />
        </h1>
        <hr />
        <div className="content">
          <C.Options>
            <div className="option" onClick={handleClick}>
              Jogar
            </div>
            <div className="option" onClick={() => setOpenInfo(true)}>
              Como funciona?
            </div>
            <div className="option" onClick={() => setOpenTech(true)}>
              Tecnologias utilizadas
            </div>
          </C.Options>
          <div>
            <SwiperComponent />
          </div>
        </div>
      </C.Content>

      <Modal open={openInfo} onClose={handleCloseInfo} style={{ zIndex: 9999 }}>
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
          }}
        >
          <C.Modal>
            <div className="title">Como funciona?</div>
            <hr />
            <div className="explanation">
              <div>
                Ao iniciar a partida, você deverá selecionar a bandeira que
                correspondente ao país que está sendo mostrado na tela. Caso
                acerte, a próxima bandeira será mostrada. Caso erre, terá que
                tentar de novo.
              </div>
            </div>
          </C.Modal>
        </Box>
      </Modal>
      <Modal open={openTech} onClose={handleCloseTech} style={{ zIndex: 9999 }}>
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
          }}
        >
          <C.Modal>
            <div className="title">Tecnologias utilizadas</div>
            <hr />
            <div className="explanation">
              <div>
                O front end foi feito com React e TypeScript, utilizando também
                bibliotecas como Styled Components e Material UI para a
                estilização da página e React Icons para os ícones.
              </div>
              <div>
                O back end foi feito em Java, utilizando o framework Spring Boot
                e Sockets para a comunicação entre o front e o back.
              </div>
              <div className="links">
                <a
                  href="https://github.com/patrickburin/jogo-adivinhar-imagem"
                  target="_blank"
                >
                  Link do repositório no GitHub
                </a>
                <a
                  href="https://github.com/patrickburin/jogo-adivinhar-imagem"
                  target="_blank"
                >
                  Link do projeto no Vercel
                </a>
              </div>
            </div>
          </C.Modal>
        </Box>
      </Modal>
    </C.Container>
  );
};

export default Home;
