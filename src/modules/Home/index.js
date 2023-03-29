import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { store } from '../../store';
import BookForm from './components/form';
import { updateBookedBikeInfo } from '../../store/bikes';
import { calculatePrice, showDialog } from '../../utils';

function Home({ selectedBike }) {
  const navigate = useNavigate();

  function handleUpdateBookInfo(data) {
    const { finalPrize, days } = calculatePrice(
      selectedBike.name,
      data.from,
      data.to
    );
    showDialog(
      `Vas a reservar desde ${data.from} hasta ${data.to}, el importe total a pagar por ${days} días sería de ${finalPrize}, <br/> ¿deseas finalizar la compra?`,
      ['Finalizar', 'Cancelar'],
      (e) => {
        if (e === 0) {
          store.dispatch(updateBookedBikeInfo({ ...data, days, finalPrize }));
          navigate('/summary');
        }
      }
    );
  }

  return (
    <div className="homeWrapper">
      <div className="homeTitle">
        <h1>Formulario de Reserva</h1>
        <p style={{ marginTop: '20px', textAlign: 'center' }}>
          Buena elección! tu <span>{selectedBike.name}</span> te está esperando.
          Solo falta que rellenes el formulario con tus datos y el período que
          la vas a necesitar.
        </p>
      </div>

      <BookForm
        updateBookInfo={handleUpdateBookInfo}
        goBack={() => navigate('/')}
      />
    </div>
  );
}

const mapStateToProps = (store) => ({
  selectedBike: store.bikes.find((bike) => bike.isSelected),
});

export default connect(mapStateToProps)(Home);
