import LogoGoIt from "assets/svg/LogoGoIt";
import TweetBackgroundCard from "assets/imgs/TweetCardBackground.png";
import css from "../TweetCard/TweetCard.module.css";
import { useEffect, useRef, useState } from "react";

export const TweetCard = ({ tweets, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followersCount, setfollowersCount] = useState(followers);

  const onFollowBtnClick = () => {
    setIsFollowed(!isFollowed);
  };

  const onFollow = () => {
    setIsFollowed(true);
    setfollowersCount(followersCount + 1);
  };
  const onUnfollow = () => {
    setIsFollowed(false);
    setfollowersCount(followers);
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
        <p className={css.cardFollowersCount}>{followersCount} Followers</p>
      </div>
      {isFollowed ? (
        <button
          type="button"
          className={css.userFollowBtnActive}
          onClick={() => onUnfollow()}
        >
          Following
        </button>
      ) : (
        <button
          type="button"
          className={css.userFollowBtn}
          onClick={() => onFollow()}
        >
          Follow
        </button>
      )}
    </div>
  );
};
