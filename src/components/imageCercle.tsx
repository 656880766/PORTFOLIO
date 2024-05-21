import React from 'react';
import '../index.css'; // Importez le fichier CSS si vous en utilisez un

interface ImageCercleProps {
  src: string;
  alt: string;
  taille?: number;
}

const ImageCercle: React.FC<ImageCercleProps> = ({ src, alt, taille = 530 }) => {
  return (
    <div className="image-cercle">
      <img src={src} alt={alt} style={{ width: taille, height: taille}} />
    </div>
  );
};

export default ImageCercle;