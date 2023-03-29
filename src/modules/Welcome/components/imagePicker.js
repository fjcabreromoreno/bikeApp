import { Gallery } from 'react-grid-gallery';

function ImagePicker({ images, onSelect }) {
  return (
    <Gallery
      images={images}
      onSelect={onSelect}
      margin={20}
      onClick={onSelect}
    />
  );
}

export default ImagePicker;
