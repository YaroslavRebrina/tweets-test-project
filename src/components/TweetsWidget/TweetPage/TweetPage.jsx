import { useSelector } from "react-redux";
import { TweetCard } from "./TweetCard/TweetCard";

import css from "./TweetPage.module.css";

import { useGetUsersQuery } from "services/usersApi";

export const TweetsPage = () => {
  const { data } = useGetUsersQuery();

  return (
    <div className={css.tweetsContainer}>
      {data &&
        data.map(({ id, tweets, followers, avatar, isFollowed }) => (
          <TweetCard
            tweets={tweets}
            followers={followers}
            avatar={avatar}
            isFollowed={isFollowed}
            id={id}
            key={id}
          />
        ))}

      <button type="button" onClick={() => {}}>
        Load more
      </button>
    </div>
  );
};
