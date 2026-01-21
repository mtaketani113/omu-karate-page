import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import Events from './data/events.json';
import { useLocation } from 'react-router-dom';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useState } from 'react';
import { Button } from '@mui/material';

const Schedule = () => {
  // 初期表示の日付をパラメータから取得
  const initParam: string = new URLSearchParams(useLocation().search).get('initDate') ?? '';

  // 日付形式がおかしい場合は、現在日とする。
  const initDate: Date =
    new Date(initParam).toString() === 'Invalid Date' ? new Date() : new Date(initParam);

  const [calenderView, setCalenderView] = useState<'dayGridMonth' | 'timeGridWeek' | 'timeGridDay'>(
    'dayGridMonth',
  );

  return (
    <>
      <title>練習予定 | 大阪公立大学空手道部 応援ページ</title>
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
        <Button
          id="mobileDayGridMonthButton"
          variant="contained"
          color={calenderView === 'dayGridMonth' ? 'success' : 'primary'}
          onClick={() => {
            setCalenderView('dayGridMonth');
            (document.querySelector('.fc-dayGridMonth-button') as any).click();
          }}
        >
          月
        </Button>
        <Button
          id="mobileTimeGridDayButton"
          variant="contained"
          color={calenderView === 'timeGridDay' ? 'success' : 'primary'}
          onClick={() => {
            setCalenderView('timeGridDay');
            (document.querySelector('.fc-timeGridDay-button') as any).click();
          }}
        >
          日
        </Button>
        <span id="fullCalendar">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            locales={[jaLocale]}
            locale="ja"
            events={Events}
            initialDate={initDate}
            contentHeight={'auto'}
            headerToolbar={{
              start: 'title',
              end: 'dayGridMonth,timeGridWeek,timeGridDay today prev,next',
            }}
            dayCellContent={(event: any) =>
              (event.dayNumberText = event.dayNumberText.replace('日', ''))
            }
          />
        </span>
      </div>
    </>
  );
};

export default Schedule;
