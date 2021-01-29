import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Logo from "../components/LogoTwinextjs";
import LoginGithub from "components/LoginGithub";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/client";
export default function Home({ name }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <h1 className={styles.title}> Twinext.js</h1>
        {user === null && <LoginGithub setUser={setUser} />}
        {user && (
          <div>
            <img src={user.avatar} />
            <strong>{user.username}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

Home.getInitialProps = () => {
  return fetch("http://localhost:3000/api/hello").then((res) => res.json());
};
