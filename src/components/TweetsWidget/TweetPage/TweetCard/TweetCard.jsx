import LogoGoIt from "assets/svg/LogoGoIt";
import TweetBackgroundCard from "assets/imgs/TweetCardBackground.png";
import css from "../TweetCard/TweetCard.module.css";

export const TweetCard = ({ tweets, followers }) => {
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
          {/* userPhotoComponent */}
        </div>
      </div>
      <div className={css.cardUserStat}>
        <p className={css.cardTweetsCount}>{tweets} Tweets</p>
        <p className={css.cardFollowersCount}>{followers} Followers</p>
      </div>
      <button type="button" className={css.userFollowBtn}>Follow</button>
    </div>
  );
};
