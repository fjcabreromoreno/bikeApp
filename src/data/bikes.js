import classicBike from '../assets/images/classicBike.jpg';
import electricBike from '../assets/images/electricBike.jpg';
import regularBike from '../assets/images/regularBike.jpg';

export const bikes = [
  {
    name: 'bicicleta vintage',
    src: classicBike,
    width: 320,
    height: 213,
    tags: [{ value: 'Vintage', title: 'Vintage' }],
    isSelected: false,
  },
  {
    name: 'bicicleta eléctrica',
    src: electricBike,
    width: 320,
    height: 213,
    tags: [{ value: 'Eléctrica', title: 'Electric Bike' }],
    isSelected: false,
  },
  {
    name: 'bicicleta clásica',
    src: regularBike,
    width: 320,
    height: 213,
    tags: [{ value: 'Clásica', title: 'Clásica' }],
    isSelected: false,
  },
];
