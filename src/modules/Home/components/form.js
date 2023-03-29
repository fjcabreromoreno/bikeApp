import { useState } from 'react';
import Moment from 'moment';
import DatePicker from './datePicker';
import Button from '../../../components/Button';
import { showDialog } from '../../../utils';

export default function Form({ updateBookInfo, goBack }) {
  const [dates, setDates] = useState([new Date(), new Date()]);

  function onChangeHandler(newValue) {
    setDates(newValue);
    setFormData((prevState) => {
      return {
        ...prevState,
        from: Moment(newValue[0]).format('YYYY-MM-DD'),
        to: Moment(newValue[1]).format('YYYY-MM-DD'),
      };
    });
  }
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    from: Moment(dates[0]).format('YYYY-MM-DD'),
    to: Moment(dates[1]).format('YYYY-MM-DD'),
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function areDifferentDays() {
    return (
      Moment(dates[0]).format('YYYY-MM-DD') !==
      Moment(dates[1]).format('YYYY-MM-DD')
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    !Object.values(formData).some((el) => el === '') && areDifferentDays()
      ? updateBookInfo(formData)
      : showDialog(
          areDifferentDays()
            ? 'Debes rellenar todos los campos para continuar'
            : 'Al menos debe alquilar la bicicleta por un día',
          ['ok']
        );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={handleChange}
        name="name"
        value={formData.name}
      />
      <input
        type="text"
        placeholder="phone"
        onChange={handleChange}
        name="phone"
        value={formData.phone}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <DatePicker onChangeHandler={onChangeHandler} dates={dates} />
      <br />
      <br />
      <div className="buttonsContainer">
        <Button title="atrás" icon="back" onClick={goBack} />
        <Button title="enviar" onClick={handleSubmit} />
      </div>
    </form>
  );
}
