import { useEffect, useState } from "react";
import { TweetCard } from "./TweetCard/TweetCard";
import { Link } from "react-router-dom";
import css from "./TweetPage.module.css";

import {
  useGetUsersQuery,
  useGetUsersWithPaginationQuery,
} from "services/usersApi";

export const TweetsPage = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [doNotloadMore, setdoNotloadMore] = useState(true);
  const { data: dataAll, isLoading } = useGetUsersQuery();

  const fetchAll = !isFirstRender && !doNotloadMore;

  const { data } = useGetUsersWithPaginationQuery({
    page: 1,
    limit: 3,
  });

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  return (
    <>
      <Link to="/" className={css.tweetsGoBackLink}>
        Go Back
      </Link>
      <div className={css.tweetsContainer}>
        {fetchAll
          ? dataAll &&
            dataAll.map(({ id, tweets, followers, avatar, isFollowed }) => (
              <TweetCard
                tweets={tweets}
                followers={followers}
                avatar={avatar}
                isFollowed={isFollowed}
                id={id}
                key={id}
              />
            ))
          : data &&
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
        {doNotloadMore && isLoading === false && (
          <button
            className={css.tweetsloadMoreButton}
            type="button"
            onClick={() => {
              setdoNotloadMore(false);
            }}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};
