import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Button, Tooltip } from '@mui/material';

const KaratedoAbout = () => {
  const answerStyle = {
    paddingLeft: '1em',
    textIndent: '-1em',
    paddingBottom: '1em',
  };

  const [wikipedia, setWikipedia] = useState<any>(null);

  useEffect(() => {
    axios
      .get('https://ja.wikipedia.org/api/rest_v1/page/summary/%E7%B3%B8%E6%9D%B1%E6%B5%81')
      .then((response) => {
        setWikipedia(response.data.extract);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h4>競技の種類</h4>
      伝統派や寸止めと言われている空手で、組手と型の競技があります。
      <li style={answerStyle}>組手は寸止めで突きや蹴りでポイントを取り、競います。</li>
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom="10px">
      <iframe
            style={{ width:'90%', aspectRatio: '16/9', border: '0' }}
            src="https://www.youtube.com/embed/rJO8TMbV_uI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          </Box>
      <li style={answerStyle}>型は決められた演武で点数を競います。</li>
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom="10px">
      <iframe
            style={{ width:'90%', aspectRatio: '16/9', border: '0' }}
            src="https://www.youtube.com/embed/Vnea9lQLp0A"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          </Box>
      <h4>大学の流派</h4>
      <Tooltip title={wikipedia + 'Wikipediaより'} arrow>
        <Button href="https://ja.wikipedia.org/wiki/%E7%B3%B8%E6%9D%B1%E6%B5%81">糸東流</Button>
      </Tooltip>
      <h4>大学の沿革</h4>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="text.success">1948</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            大阪商科大学空手道部(旧大阪市立大学)、故斎藤師範のもと、有志5～6名で発足。
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.success">1949</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>大阪市立大学、浪速大学 発足</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">1955</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>浪速大学から大阪府立大学へ改称</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">2005</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>大阪府立大学、大阪女子大学、大阪府立看護大学が合併</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">2022</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>市大、府大が合併し大阪公立大学 発足</TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default KaratedoAbout;
