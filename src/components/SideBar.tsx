import { useRouter } from "next/router";
import styles from "../styles/components/SideBar.module.css";

export function SideBar() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <div>
        <img src="/Logo_mini.svg" alt="Logo pequeno Move-it" />
      </div>
      <div className={styles.homeButton}>
        <button onClick={handleClick} type="button">
          <img src="icons/home.svg" alt="Botão voltar par Home" />
        </button>
      </div>
    </div>
  );
}
