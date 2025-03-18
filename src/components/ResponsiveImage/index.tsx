import { FC } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

interface ResponsiveImageProps {
  src: string;
  alt: string;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({ src, alt }) => {
  const formatImageUrl = (
    url: string,
    params: Record<string, number>
  ): string => {
    return url.replace(
      /{(\w+)}/g,
      (_, key) => params[key]?.toString() || `{${key}}`
    );
  };

  const finalUrl = formatImageUrl(src, { width: 400, height: 400 });

  return <Image src={finalUrl} alt={alt} loading="lazy" />;
};

export default ResponsiveImage;
