import classicBike from '../assets/images/classicBike.jpg';
import electricBike from '../assets/images/electricBike.jpg';
import regularBike from '../assets/images/regularBike.jpg';

export const bikes = [
  {
    name: 'bicicleta vintage',
    src: classicBike,
    width: 320,
    height: 213,
    tags: [{ value: 'Vintage Bike', title: 'Vintage Bike' }],
    isSelected: false,
  },
  {
    name: 'bicicleta eléctrica',
    src: electricBike,
    width: 320,
    height: 213,
    tags: [{ value: 'Electric Bike', title: 'Electric Bike' }],
    isSelected: false,
  },
  {
    name: 'bicicleta clásica',
    src: regularBike,
    width: 320,
    height: 213,
    tags: [{ value: 'Regular Bike', title: 'Regular Bike' }],
    isSelected: false,
  },
];
