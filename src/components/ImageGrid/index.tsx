import { FC, Key } from 'react';
import styled from 'styled-components';
import ResponsiveImage from '../ResponsiveImage';
import { Image } from '../../types.ts';

const GridContainer = styled.div`
  display: grid;
  //grid-template-columns: repeat(auto, minmax(150px, 1fr));
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: auto;
  gap: 10px;
  width: 100%;
  margin: auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const ImageWrapper = styled.div`
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: auto;
  object-fit: cover;
`;

interface ImageGridProps {
  images?: Image[];
}

const ImageGrid: FC<ImageGridProps> = ({ images }) => {
  if (images?.length === 0) return null;

  return (
    <GridContainer>
      {images?.map(
        (image: { id: Key | null | undefined; src: string }, index: number) => (
          <ImageWrapper key={image.id}>
            <ResponsiveImage
              src={image.src}
              alt={'img'}
              isLarge={index % 3 === 0}
            />
          </ImageWrapper>
        )
      )}
    </GridContainer>
  );
};

export default ImageGrid;
