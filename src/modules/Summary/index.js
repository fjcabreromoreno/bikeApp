import { connect } from 'react-redux';

function Summary({ selectedBike }) {
  const { name, from, to, days, finalPrize } = selectedBike.bookInfo;

  return (
    <div className="summaryContainer">
      <div className="summaryTitle">
        <h3>Gracias por confiar en nosotros {name}</h3>
        <p>A continuación te mostramos los detalles de tu reserva</p>
      </div>
      <div className="summaryTable">
        <table className="shop_table my_account_orders">
          <thead>
            <tr>
              <th>Tipo de bici</th>
              <th>Desde</th>
              <th>Hasta</th>
              <th>Total días</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="order">
              <td>{selectedBike.name}</td>
              <td>{from}</td>
              <td>{to}</td>
              <td>{days}</td>
              <td>{finalPrize}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({
  selectedBike: store.bikes.find((bike) => bike.isSelected),
});

export default connect(mapStateToProps)(Summary);
