import styles from "../styles/components/CompletedChallendes.module.css";

export function CompletedChallendes() {
  return (
    <div className={styles.completedChallendesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}
