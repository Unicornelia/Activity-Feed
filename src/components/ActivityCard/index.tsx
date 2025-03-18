import { FC } from 'react';
import styled from 'styled-components';
import UserCard from '../UserCard';
import HorizontalGrid from '../HorizontalGrid';
import ImageGrid from '../ImageGrid';
import { Tour, TourData, TourMetric } from '../../types.ts';
import { calculateSpeed, formatDate, formatTimeInMotion } from '../../utils';
import MapOverlay from '../MapOverlay';

const CardWrapper = styled.div`
  background-color: white;
  padding: 30px;
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.1),
    0 3px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 1200px;
  min-width: 280px;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const Header = styled.header`
  display: grid;
`;

const Title = styled.div`
  display: grid;

  h1 {
    font-size: 3rem;
  }
`;
const ImageGridWrapper = styled.div`
  position: relative;
  width: 100%;
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
      <ImageGridWrapper>
        <ImageGrid images={tour.images} />
        <MapOverlay vectorMap={tour.vector_map_image_preview} />
      </ImageGridWrapper>
    </CardWrapper>
  );
};

export default ActivityCard;
