import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import 'react-calendar/dist/Calendar.css';

function DatePicker({ dates, onChangeHandler }) {
  return (
    <DateRangePicker
      onChange={onChangeHandler}
      value={dates}
      minDate={new Date()}
      locale="es-ES"
      clearIcon={false}
    />
  );
}

export default DatePicker;
