import AppLayout from "Layouts/AppLayout"
import HomeLayout from "Layouts/HomeLayout"
import Tweets from "components/Tweets"

import { useEffect, useState } from "react"

export default function Home() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  useEffect(() => {
    console.log(timeline)
  })

  return (
    <AppLayout titleHead="Home | Twinext.js" centerItems={false}>
      <HomeLayout textHeader="Inicio">
        {timeline.map(({ id, username, avatar, message }) => (
          <Tweets
            key={id}
            username={username}
            avatar={avatar}
            message={message}
          />
        ))}
      </HomeLayout>
    </AppLayout>
  )
}
