import moment from 'moment';
import { useState } from 'react';

export const BIKE_TYPE = {
  CLASSIC: 'bicicleta clásica',
  VINTAGE: 'bicicleta vintage',
  ELECTRIC: 'bicicleta eléctrica',
};

var setIsOpen, setSummary, setButtons, setHandleExit;
export var showInteractiveHelp;

export function Initialize() {
  var isOpen, summary, buttons, handleExit;

  [isOpen, setIsOpen] = useState(false);
  [summary, setSummary] = useState('');
  [buttons, setButtons] = useState([]);
  [handleExit, setHandleExit] = useState(null);

  return {
    isOpen,
    handleClose: () => {
      setIsOpen(false);
      setButtons('');
    },
    handleExit,
    summary,
    buttons,
  };
}

export function showDialog(summary, buttons, callback) {
  setSummary(summary);
  setIsOpen(true);
  buttons && setButtons(buttons);
  setHandleExit(callback ? () => callback : null);
}

function getBasePrize(from) {
  return from > 0 && from < 15 ? 10 : 12;
}

export function calculatePrice(bike, from, to) {
  const dateFrom = moment(from),
    dateTo = moment(to),
    diff = dateTo.diff(dateFrom, 'days'),
    basePrize = getBasePrize(parseInt(from.split('-')[2]), 10);
  let finalPrize = '';

  switch (bike) {
    case BIKE_TYPE.CLASSIC:
      finalPrize = diff <= 3 ? basePrize : basePrize * (diff - 2);
      break;
    case BIKE_TYPE.VINTAGE:
      finalPrize = diff <= 5 ? basePrize : basePrize * (diff - 4);
      break;
    default:
      finalPrize = diff * basePrize;
      break;
  }

  return { finalPrize, days: diff };
}
