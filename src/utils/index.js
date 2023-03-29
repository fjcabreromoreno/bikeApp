import moment from 'moment';
import { useState } from 'react';

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

  if (bike === 'bicicleta eléctrica') {
    console.log('1', diff);
    console.log('2', basePrize);
    finalPrize = diff * basePrize;
  } else {
    if (bike === 'bicicleta vintage') {
      finalPrize = diff <= 5 ? basePrize : basePrize * (diff - 5);
    } else {
      finalPrize = diff <= 5 ? basePrize : basePrize * (diff - 3);
    }
  }

  return { finalPrize, days: diff };
}
