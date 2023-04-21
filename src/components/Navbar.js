import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import {
  faEnvelope,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FADE_DROPDOWN } from "./animations/framer-animations";

const UserInfo = () => {
  return (
    <motion.div
      className="user_info"
      variants={FADE_DROPDOWN}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <p>
        <FontAwesomeIcon icon={faUser} /> Nombre completo
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> Correo
      </p>
      <button>Cerrar Sesión</button>
    </motion.div>
  );
};

export const Navbar = () => {
  const [userInfoHidden, setUserInfoHidden] = useState(true);

  return (
    <div className="header">
      <div className="header_logo">
        <img src="/logo.png" alt="Logo" />
        <p className="title">Evaluar Cursos</p>
      </div>
      <div className="header_user">
        <FontAwesomeIcon
          icon={faUserCircle}
          onClick={() => setUserInfoHidden(!userInfoHidden)}
        />
      </div>
      <AnimatePresence>{userInfoHidden ? null : <UserInfo />}</AnimatePresence>
    </div>
  );
};
