import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Links = () => {
  return (
    <>
      <a href="https://twitter.com/omu_karatedo?">大阪公立大学のTwitter</a>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="omu_karatedo"
        options={{ height: 600 }}
      />
    </>
  );
};

export default Links;
