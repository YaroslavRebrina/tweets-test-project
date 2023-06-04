import LogoGoIt from "assets/svg/LogoGoIt";
import TweetBackgroundCard from "assets/imgs/TweetCardBackground.png";
import css from "../TweetCard/TweetCard.module.css";

import {
  useFollowUserMutation,
  useUnFollowUserMutation,
} from "services/usersApi";

export const TweetCard = ({ id, tweets, followers, avatar, isFollowed }) => {
  const [unFollowUser] = useUnFollowUserMutation();
  const [followUser] = useFollowUserMutation();

  const buttonOnClickUnfollow = async () => {
    unFollowUser({ id, isFollowed: false, followers });
  };

  const buttonOnClickFollow = async () => {
    followUser({ id, isFollowed: true, followers });
  };

  return (
    <div className={css.cardWrapper}>
      <LogoGoIt className={css.cardLogo} />
      <img
        src={TweetBackgroundCard}
        alt="background"
        className={css.cardTweetBackgroundimg}
      />
      <div className={css.cardMiddleBorder}>
        <div className={css.cardUserPhotoWrapper}>
          <img src={avatar} alt="user avatar" className={css.cardAvatar} />
        </div>
      </div>
      <div className={css.cardUserStat}>
        <p className={css.cardTweetsCount}>{tweets} Tweets</p>
        <p className={css.cardFollowersCount}>{followers} Followers</p>
      </div>
      {isFollowed === true ? (
        <button
          type="button"
          className={css.userFollowBtnActive}
          onClick={() => buttonOnClickUnfollow()}
        >
          Following
        </button>
      ) : (
        <button
          type="button"
          className={css.userFollowBtn}
          onClick={() => buttonOnClickFollow()}
        >
          Follow
        </button>
      )}
    </div>
  );
};
