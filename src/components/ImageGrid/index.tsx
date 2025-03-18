import { FC, Key } from 'react';
import styled from 'styled-components';
import { Image } from '../../types.ts';
import ResponsiveImage from '../ResponsiveImage';

const GridContainer = styled.div<{ $imagesLength?: number }>`
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: auto;
  margin: auto;
  justify-content: center;
  grid-auto-flow: dense;
  ${({ $imagesLength }) => {
    if ($imagesLength === 1) {
      return `
        grid-template-areas:
          'side0';
      `;
    }
    if ($imagesLength === 2) {
      return `
        grid-template-areas:
          'side0 side1';
      `;
    }
    if ($imagesLength === 3) {
      return `
        grid-template-areas:
          'side0 side1'
          'side0 side2';
      `;
    }
    if ($imagesLength === 4) {
      return `
        grid-template-areas:
          'side0 side1'
          'side2 side3';
      `;
    }
    if ($imagesLength === 5) {
      return `
        grid-template-areas:
          'side0 side1'
          'side0 side2'
          'side3 side4';
      `;
    }
    if ($imagesLength === 6) {
      return `
        grid-template-areas:
          'side0 side1'
          'side0 side2'
          'side3 side4'
          'side5 side4';
      `;
    }
    if ($imagesLength === 7) {
      return `
        grid-template-areas:
          'side0 side1'
          'side0 side2'
          'side3 side4'
          'side5 side6';
      `;
    }
  }}
`;

const ImageWrapper = styled.div<{ $imgIndex?: number }>`
  display: grid;
  border-radius: 2px;
  overflow: hidden;
  width: 100%;
  height: auto;
  grid-area: ${({ $imgIndex }) => {
    return `side${$imgIndex}`;
  }};
`;

interface ImageGridProps {
  images?: Image[];
}

const ImageGrid: FC<ImageGridProps> = ({ images }) => {
  if (images?.length === 0) return null;

  return (
    <GridContainer $imagesLength={images?.length}>
      {images?.map(
        (image: { id: Key | null | undefined; src: string }, index: number) => (
          <ImageWrapper key={image.id} $imgIndex={index}>
            <ResponsiveImage src={image.src} alt={'img'} />
          </ImageWrapper>
        )
      )}
    </GridContainer>
  );
};

export default ImageGrid;
