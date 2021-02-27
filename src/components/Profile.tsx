import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css";

interface IUserGithub {
  name: string;
  avatar_url: string;
}

interface ProfileDAta {
  user: IUserGithub;
}
const Profile = ({ user }: ProfileDAta) => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={user.avatar_url} alt={user.name} />
      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
