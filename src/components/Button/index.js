import PedalBikeIcon from '@mui/icons-material/PedalBike';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Button({ title, onClick, icon = 'bike' }) {
  return (
    <button className="button" onClick={onClick}>
      {icon === 'bike' ? (
        <PedalBikeIcon className="leftStar" />
      ) : (
        <ArrowBackIcon />
      )}
      {title}
      {icon === 'bike' && <PedalBikeIcon className="rightStar" />}
    </button>
  );
}

export default Button;
