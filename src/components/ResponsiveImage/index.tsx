import { FC } from 'react';
import styled from 'styled-components';

const Image = styled.img<{ $isLarge?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  grid-row: ${({ $isLarge }) => ($isLarge ? 'span 2' : 'auto')};
`;

interface ResponsiveImageProps {
  src: string;
  alt: string;
  isLarge?: boolean;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({ src, alt, isLarge }) => {
  const formatImageUrl = (
    url: string,
    params: Record<string, number>
  ): string => {
    return url.replace(
      /{(\w+)}/g,
      (_, key) => params[key]?.toString() || `{${key}}`
    );
  };

  const finalUrl = formatImageUrl(src, { width: 400, height: 300 });

  return <Image src={finalUrl} alt={alt} loading="lazy" $isLarge={isLarge} />;
};

export default ResponsiveImage;
