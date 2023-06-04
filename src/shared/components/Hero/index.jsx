import { Btn_Download, C_Hero } from "./styled";
import Video from "../../../assets/images/video-hero.mp4";
import DownloadCV from "../../../assets/cv-lucasgomes2023-1.pdf";
import { Download } from "phosphor-react";

export const Hero = () => {
  return (
    <C_Hero>
      <video src={Video} autoPlay muted loop></video>
      <div className="container">
        <h1 className="title">
          Desenvolvedor <br /> <span>Front-End Jr</span>
        </h1>
        <p className="paragrafo">
          Estou sempre em busca de conhecimento e novos desafios. Atualmente,
          tenho conhecimento HTML, CSS, JavaScript, React, Angular e estou
          aprendendo NodeJS, TypeScript e MongoDB. Tenho facilidade no
          aprendizado, sou proativo e determinado.
        </p>
        <Btn_Download href={DownloadCV} download="curriculo-vitae">
          <Download size={24} />
          <p>Download</p>
        </Btn_Download>
      </div>
    </C_Hero>
  );
};
