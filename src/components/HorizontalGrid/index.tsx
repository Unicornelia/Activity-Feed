import { FC } from 'react';
import styled from 'styled-components';
import { TourMetric } from '../../types.ts';

interface HorizontalGridProps {
  items: TourMetric[];
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  padding: 15px;
  margin: 0 auto;
  border-top: 2px solid rgba(0, 0, 0, 0.2);

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
    height: 60%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const GridItem = styled.div`
  text-align: center;
  padding: 10px;
  font-weight: bold;
`;

const HorizontalGrid: FC<HorizontalGridProps> = ({ items }) => {
  return (
    <GridContainer>
      {items.map((item, index) => (
        <GridItem key={index}>
          {item.icon}
          {item.metric}
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default HorizontalGrid;
