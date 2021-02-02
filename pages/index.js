import LoginGithub from "components/LoginGithub"
import Avatar from "components/Avatar"
import React, { useState, useEffect } from "react"
import AppLayout from "Layouts/AppLayout"

import { onAuthStateChanged } from "firebase/client"

const getUserStateValue = function (user) {
  return {
    isLogged: () => user,
    isNotLogged: () => user === null,
    isLoading: () => user === undefined,
  }
}

export default function Home({ name }) {
  const [user, setUser] = useState(undefined)
  const USER_STATE = getUserStateValue(user)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const condicionalRenderingAvatar = () => {
    return (
      USER_STATE.isLogged() && (
        <Avatar avatar={user.avatar} username={user.username} />
      )
    )
  }

  const condicionalRenderingGithubLogin = () => {
    return USER_STATE.isNotLogged() && <LoginGithub setUser={setUser} />
  }

  return (
    <AppLayout centerItems={true} titleHead="Twinext.js">
      <h1> Twinext.js</h1>
      {condicionalRenderingGithubLogin()}
      {condicionalRenderingAvatar()}
    </AppLayout>
  )
}
