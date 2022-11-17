import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';

const Schedule = () => {
  const events = [
    { title: '杉本町', start: '2022-11-19 10:00', end: '2022-11-19 12:00' },
    { title: '中百舌鳥', start: '2022-11-24 17:00', end: '2022-11-24 19:00' },
  ];

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale="ja"
        events={events}
      />
    </div>
  );
};

export default Schedule;
