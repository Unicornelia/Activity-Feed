import { FC } from 'react';
import styled from 'styled-components';
import { VectorMapImage } from '../../types.ts';

const Map = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 150px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.9;
  z-index: 10;
  border: 2px solid white;

  @media (max-width: 768px) {
    width: 120px;
    bottom: 8px;
    right: 8px;
  }

  @media (max-width: 480px) {
    width: 100px;
    bottom: 6px;
    right: 6px;
  }
`;

interface MapOverlayProps {
  vectorMap: VectorMapImage;
}

const MapOverlay: FC<MapOverlayProps> = ({ vectorMap }) => {
  return <Map src={vectorMap.src} alt="Map Snippet" />;
};

export default MapOverlay;
