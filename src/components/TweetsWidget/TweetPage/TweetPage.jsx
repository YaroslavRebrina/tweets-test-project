import { useEffect, useState } from "react";
import { TweetCard } from "./TweetCard/TweetCard";
import { fetchUsers } from "services/usersAPI";

export const TweetsPage = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (users === null) {
      fetchUsers()
        .then((data) => {
          setUsers(data);
          return data;
        })
        .then((data) =>
          localStorage.setItem("USERS_LIST", JSON.stringify(data))
        )
        .catch(console.log);
    } else if (typeof users === "object") {
      return;
    } else {
      setUsers(JSON.parse(localStorage.getItem("USERS_LIST")));
    }
  }, [users]);

  const updateUserList = (data) => {
    setUsers(data);
  };
  return (
    <div>
      {users &&
        users.map(
          ({ id, tweets, followers, avatar, updateUserListHandler }) => (
            <TweetCard
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              updateUserListHandler={updateUserList}
              key={id}
            />
          )
        )}
    </div>
  );
};
