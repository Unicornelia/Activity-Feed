import { FC } from 'react';
import styled from 'styled-components';
import UserCard from '../UserCard';
import HorizontalGrid from '../HorizontalGrid';
import ImageGrid from '../ImageGrid';
import { Tour, TourData, TourMetric } from '../../types.ts';
import { calculateSpeed, formatDate, formatTimeInMotion } from '../../utils';

const CardWrapper = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.1),
    0 3px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 1200px;
  min-width: 280px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const Header = styled.header`
  display: flex;
`;

const Title = styled.div`
  display: flex;

  h1 {
    font-size: 3rem;
  }
`;

const ActivityCard: FC<Tour> = (tour) => {
  const generateTourData = (tour: TourData): TourMetric[] => {
    return [
      { icon: '⏱️', metric: `${formatTimeInMotion(tour.time_in_motion)}` },
      { icon: '⟷', metric: `${tour.distance / 1000}km` },
      {
        icon: '⌀',
        metric: `${calculateSpeed(tour.distance, tour.time_in_motion)}km/h`,
      },
      { icon: '↗︎', metric: `${tour.elevation_up} m` },
      { icon: '↘︎', metric: `${tour.elevation_down} m` },
    ];
  };

  const tourItems = generateTourData(tour);

  return (
    <CardWrapper>
      <Header>
        <UserCard
          key={tour.id}
          avatar={tour.creator.avatar}
          displayName={tour.display_name}
          date={formatDate(tour.date)}
        />
      </Header>
      <Title>
        <h1>{tour.name}</h1>
      </Title>
      <HorizontalGrid items={tourItems} />
      <ImageGrid images={tour.images} />
    </CardWrapper>
  );
};

export default ActivityCard;
