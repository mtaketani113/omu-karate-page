import { useLocation } from 'react-router-dom';
import { PAGE_MAIN_TITLE } from './parts/constants';
import Iframe from 'react-iframe';

const Schedule = () => {
  // 初期表示の日付をパラメータから取得
  const initParam: string = new URLSearchParams(useLocation().search).get('initDate') ?? '';

  const paramDate = initParam !== '' ? '&dates=' + initParam + '/' + initParam : '';

  return (
    <>
      <title>練習予定 | {PAGE_MAIN_TITLE}</title>
      <div>
        <h2 data-testid="schedule_title">練習予定</h2>

        <span id="fullCalendar" data-testid="fullCalendar">
          <Iframe
            url={
              'https://calendar.google.com/calendar/embed?src=cb58c1def22bac7f703c4fcd46d21af69aad60aabb41adbe87149fb181dc9f18%40group.calendar.google.com&ctz=Asia%2FTokyo' +
              paramDate
            }
            width="100%"
            height="500px"
          />
        </span>
      </div>
    </>
  );
};

export default Schedule;
