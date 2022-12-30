import FullCalendar, { DayCellContentArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import Events from './data/events.json';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Schedule = () => {
  //初期表示の日付をパラメータから取得
  const initDate:string | Date = new URLSearchParams(useLocation().search).get('initDate') ?? new Date();
  
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>練習予定 | 大阪公立大学空手道部 応援ページ</title>
        </Helmet>
      </HelmetProvider>
      <div>
        <h2 data-testid="schedule_title">練習予定</h2>
        <div className="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-start fc-event-end fc-event-future">
          <div className="fc-daygrid-event-dot" />
          杉本キャンパス
        </div>
        <div className="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-start fc-event-end fc-event-future">
          <div className="fc-daygrid-event-dot" style={{ borderColor: 'green' }} />
          中百舌鳥キャンパス
        </div>
        <div className="fc-daygrid-event fc-daygrid-dot-event fc-event fc-event-start fc-event-end fc-event-future">
          <div className="fc-daygrid-event-dot" style={{ borderColor: 'orange' }} />
          イベント
        </div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          locales={[jaLocale]}
          locale="ja"
          events={Events}
          initialDate={initDate}
          dayCellContent={(event: DayCellContentArg) =>
            (event.dayNumberText = event.dayNumberText.replace('日', ''))
          }
        />
      </div>
    </>
  );
};

export default Schedule;
