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
                Ao iniciar a partida, uma bandeira será exibida e você deverá
                escolher a opção correta. As bandeiras são de países e de times
                de futebol
              </div>
              <div>
                Após selecionar a opção desejada, um aviso mostrando se acertou
                ou não irá aparecer na tela. Caso tenha errado, você tentará de
                novo. Caso acerte, uma nova etapa será exibida
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
                O BACK ED FOI FEITO EM JAVA COM SOCKETS TERMINAR ISSO AQUI COM O
                LEONARDINNNN
              </div>
              <div>
                COLOCAR AQUII INFOR DE ONDE FORAM ARMAZENADOS E OUTRRAS COISAS,
                POR EXEMPLO O REPOSITORIO ESTA NO GITHUB E TAMBEM NA VERCEL E
                BABABABABABA
              </div>
            </div>
          </C.Modal>
        </Box>
      </Modal>
    </C.Container>
  );
};

export default Home;
