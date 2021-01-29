import * as React from "react";
import Logo from "components/LogoGithub";
import styles from "./styles.module.css";
import { loginWithGithub } from "firebase/client";

export default function LoginGithub({ setUser }) {
  const handleOnClick = () => {
    loginWithGithub()
      .then((user) => setUser(user))
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.container} onClick={handleOnClick}>
      <Logo fill="#ffffff" />
      Login with Github
    </div>
  );
}
