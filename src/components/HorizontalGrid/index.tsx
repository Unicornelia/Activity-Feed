import { FC } from 'react';
import styled from 'styled-components';
import { TourMetric } from '../../types.ts';
import { theme } from '../../styles/theme.ts';

interface HorizontalGridProps {
  items: TourMetric[];
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 10px;
  padding: 10px;
  margin: 0 auto;
  border-top: 2px solid rgba(0, 0, 0, 0.15);
  color: ${theme.colors.greyText};

  @media (max-width: 768px) {
    gap: 6px;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  }

  @media (max-width: 480px) {
    display: none;
  }

  & > div {
    padding: 8px 16px;
    position: relative;
  }

  & > div:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 50%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const GridItem = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: ${theme.fontSizes.sm};

  @media (max-width: 480px) {
    font-size: ${theme.fontSizes.xs};
  }
`;

const HorizontalGrid: FC<HorizontalGridProps> = ({ items }) => {
  return (
    <GridContainer>
      {items.map((item, index) => (
        <GridItem key={index}>
          <span>
            {item.icon} {item.metric}
          </span>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default HorizontalGrid;
