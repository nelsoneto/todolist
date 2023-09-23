import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span className={styles.footer_span}>
          {new Date().getFullYear()} &copy; Criado por Onerso &#127836;
        </span>
      </p>
    </footer>
  );
}

export default Footer;
