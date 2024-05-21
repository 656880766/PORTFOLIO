import ImageCercle from './imageCercle';
import { yveslinkedin } from '../assets';

const PhotoProfile = () => {
  return (
    <div className="App">
      <ImageCercle src={yveslinkedin} alt="Image de profil" />
    </div>
  );
};

export default PhotoProfile;