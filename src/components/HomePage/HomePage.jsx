import { useEffect, useState } from "react";
import { fetchOneUser } from "../../services/usersAPsI";
import { TweetCard } from "../TweetsWidget/TweetPage/TweetCard/TweetCard";
import { Link } from "react-router-dom";

import css from "./HomePage.module.css";

export const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    !user &&
      fetchOneUser(generateRandom())
        .then((data) => setUser([data]))
        .catch(console.log);
  }, [user]);

  function generateRandom(min = 1, max = 12) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }

  console.log(user);
  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeMainTitle}>Template of tweet card</h1>
      <h3 className={css.homeMainTitle}>Refresh to generate random card</h3>
      <pre>
        Follow button is not working here, move to&nbsp;
        <Link to={"/tweets"}>Tweets</Link> to make sure it`s working ;&#41;
      </pre>
      {user &&
        user.map(({ id, tweets, followers, avatar, isFollowed }) => (
          <TweetCard
            tweets={tweets}
            followers={followers}
            avatar={avatar}
            isFollowed={isFollowed}
            id={id}
            key={id}
          />
        ))}
    </div>
  );
};
