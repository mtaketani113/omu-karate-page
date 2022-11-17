import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Links = () => {
  return (
    <>
      大阪公立大学のTwitter
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="omu_karatedo"
        options={{ height: 600 }}
      />
    </>
  );
};

export default Links;
