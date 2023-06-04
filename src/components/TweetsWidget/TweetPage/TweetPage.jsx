import { useEffect, useState } from "react";
import { TweetCard } from "./TweetCard/TweetCard";
import { fetchUsers } from "services/usersAPI";

export const TweetsPage = () => {
  const [users, setUsers] = useState(null);
  const [isNeedToRefetch, setIsNeedToRefetch] = useState(false);

  // const willFetch =  || isNeedToRefetch;

  useEffect(() => {
    !users &&
      fetchUsers()
        .then((data) => {
          setUsers(data);
          setIsNeedToRefetch(false);
          return;
        })
        .catch(console.log);
  }, [users]);

  useEffect(() => {
    isNeedToRefetch &&
      fetchUsers()
        .then((data) => {
          setUsers(data);
          setIsNeedToRefetch(false);
          return;
        })
        .catch(console.log);
  }, [isNeedToRefetch]);

  const updateUsers = () => {
    setIsNeedToRefetch(true);
  };

  return (
    <div>
      {users &&
        users.map(({ id, tweets, followers, avatar, isFollowed }) => (
          <TweetCard
            tweets={tweets}
            followers={followers}
            avatar={avatar}
            isFollowed={isFollowed}
            updateUsersHandler={updateUsers}
            id={id}
            key={id}
          />
        ))}
    </div>
  );
};
