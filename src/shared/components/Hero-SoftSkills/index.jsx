import { Checks } from "phosphor-react";
import { C_Hero_Soft } from "./styled";

export const Hero_SoftSkills = () => {
  const list_soft = [
    "Bom trabalho em equipe.",
    "Comunicação",
    "Proativo.",
    "Resiliente e flexível.",
    "Organizado.",
    "Capacidade em resolução de problemas.",
  ];

  return (
    <C_Hero_Soft>
      <div className="container image">
        <img
          src="https://miro.medium.com/v2/resize:fit:680/0*IyElEdA3itlfv_65"
          alt=""
        />
      </div>

      <div className="container soft">
        <h2 className="title">Soft Skills</h2>
        <ul>
          {list_soft.map((softskill, index) => (
            <li key={index}>
              <Checks size={24} color="#06f416" /> {softskill}
            </li>
          ))}
        </ul>
      </div>
    </C_Hero_Soft>
  );
};
