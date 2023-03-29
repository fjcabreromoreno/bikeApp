import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { store } from '../../store';
import { selectBike } from '../../store/bikes';
import ImagePicker from './components/imagePicker';
import Button from '../../components/Button';
import { showDialog } from '../../utils';

function Welcome({ bikes }) {
  const navigate = useNavigate();

  function onHandleSelect(index) {
    store.dispatch(selectBike(index));
  }

  function onHandleClick() {
    bikes.some((el) => el.isSelected)
      ? navigate('/book')
      : showDialog('Debes elegir un modelo', ['ok']);
  }

  return (
    <div className="WelcomeWrapper">
      <div className="infoWrapper">
        <h2>Bienvenido a rentABike</h2>
        <p>Elige la bicicleta que mejor se adpate a tus necesidades</p>
      </div>

      <div className="imagePickerWrapper">
        <ImagePicker images={bikes} onSelect={onHandleSelect} />
      </div>
      <div className="buttonContainer">
        <Button title="Continuar" onClick={onHandleClick} />
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({
  bikes: store.bikes,
});

export default connect(mapStateToProps)(Welcome);
