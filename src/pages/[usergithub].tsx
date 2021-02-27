import Head from "next/head";
import { GetServerSideProps } from "next";

import Profile from "../components/Profile";
import { CompletedChallendes } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengeBox } from "../components/ChallengeBox";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from "../styles/pages/Home.module.css";
import { SideBar } from "../components/SideBar";

interface IUserGithub {
  name: string;
  avatar_url: string;
}

interface HomeProps {
  user: IUserGithub;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  user,
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <SideBar />
          <section>
            <div>
              <Profile user={user} />
              <CompletedChallendes />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const { usergithub } = params;

  const { level, currentExperience, challengesCompleted } = req.cookies;
  const response = await fetch(`https://api.github.com/users/${usergithub}`);
  const user = await response.json();

  return {
    props: {
      user,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
