//react
import { useState } from "react";

//styles
import * as C from "./styles";

//react icons
import { FaBook, FaQuestion } from "react-icons/fa6";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { LiaQuestionSolid } from "react-icons/lia";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  GiBrazilFlag,
  GiConsoleController,
  GiSoccerBall,
} from "react-icons/gi";

//material ui
import { Box, Modal } from "@mui/material";

const Home = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const handleCloseInfo = () => setOpenInfo(false);

  return (
    <C.Container>
      <C.Content>
        <h1>
          Qual o nome <FaQuestion />
        </h1>
        <hr />
        <div className="content">
          <div className="subtitle">
            Escolha uma categoria para jogar!
            <div className="help" onClick={() => setOpenInfo(true)}>
              Como funciona?
            </div>
          </div>
          <C.Options>
            <div className="divider">
              <div className="option country">
                País <GiBrazilFlag size={40} />
              </div>
              <div className="option football">
                Futebol <GiSoccerBall size={40} />
              </div>
            </div>
            <div className="divider">
              <div className="option film">
                Filme <PiFilmSlateDuotone size={40} />
              </div>
              <div className="option actor">
                Ator <BsFileEarmarkPerson size={40} />
              </div>
            </div>
          </C.Options>
        </div>
        <div className="footer">
          <GiConsoleController size={150} color={"#d3d3d3"} />
          <LiaQuestionSolid size={150} color={"#d3d3d3"} />
          <FaBook size={115} color={"#d3d3d3"} />
          <AiOutlineCheckCircle size={150} color={"#d3d3d3"} />
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
          }}
        >
          <C.Modal>
            <div className="title">Como funciona?</div>
            <hr />
            <div className="explanation">
              <div>
                Você deve selecionar a categoria desejada e adivinhar qual o
                nome de acordo com a imagem que irá aparecer
              </div>
              <div>
                Caso acerte, a próxima imagem será exibida. Se errar, a imagem
                continua e sua resposta será automaticamente apagada
              </div>
            </div>
          </C.Modal>
        </Box>
      </Modal>
    </C.Container>
  );
};

export default Home;
