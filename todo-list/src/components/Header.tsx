import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.p}>
        <span>Lista de Tarefas Contec Sistemas</span>
      </p>
    </header>
  );
}

export default Header;
