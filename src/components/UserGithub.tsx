import { useRouter } from "next/router";
import { useState } from "react";

import styles from "../styles/components/UserGithube.module.css";

export default function UserGithub() {
  const [userName, setUserName] = useState("");
  const router = useRouter();

  function handleChange(event) {
    setUserName(event.target.value);
  }

  function handleClick() {
    router.push(`/${userName}`);
  }

  return (
    <div className={styles.container}>
      <section className={styles.leftSide}>
        <img src="Simbolo.svg" alt="Imagem do Move-it" />
      </section>
      <section className={styles.rightSide}>
        <div className={styles.sideLogo}>
          <img src="logo.svg" alt="Logo move-it" />
        </div>
        <div className={styles.containerUser}>
          <strong>Bem-vindo</strong>
          <div className={styles.infoLogin}>
            <img src="Github.svg" alt="Imagem Github" />
            <span>Faça login com seu Github para começar</span>
          </div>
          <div className={styles.buttonAndInput}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Digite seu username"
            />
            <button onClick={handleClick}>
              <img src="icons/arrow.svg" alt="Entrar" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
