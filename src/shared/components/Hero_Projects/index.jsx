import { C_Projects } from "./styled";
import { motion } from "framer-motion";

import Html_CSS from "../../../assets/images/html5-css3.png";
import Js from "../../../assets/images/javascript.png";
import Angular from "../../../assets/images/angular.png";
import Reacjs from "../../../assets/images/reactjs.png";
import Typescript from "../../../assets/images/ts_logo.png";
import Vue from "../../../assets/images/vue.png";
import Agile from "../../../assets/images/agile.png";
import { useEffect, useRef, useState } from "react";

export const Hero_Projects = () => {
  const imagens = [Html_CSS, Js, Angular, Reacjs, Typescript, Vue, Agile];
  const [width, setWidth] = useState(0);

  const carrousel = useRef();

  useEffect(() => {
    console.log(carrousel.current?.scrollWidth, carrousel.current?.offsetWidth);
    setWidth(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth);
  }, []);
  return (
    <C_Projects>
      <div className="container">
        <motion.div className="carrousel" whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className="inner"
            drag="x"
            ref={carrousel}
            dragConstraints={{ right: 0, left: -width }}
          >
            {imagens.map((item, index) => (
              <motion.div className="item" key={index}>
                <img src={item} alt="imagens" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </C_Projects>
  );
};
