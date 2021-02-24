import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompletedChallendes.module.css";

export function CompletedChallendes() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.completedChallendesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
