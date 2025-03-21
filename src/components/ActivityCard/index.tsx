import { FC, useMemo } from 'react';
import styled from 'styled-components';
import UserCard from '../UserCard';
import HorizontalGrid from '../HorizontalGrid';
import ImageGrid from '../ImageGrid';
import { Tour, TourData, TourMetric } from '../../types.ts';
import { calculateSpeed, formatDate, formatTimeInMotion } from '../../utils';
import MapOverlay from '../MapOverlay';
import { theme } from '../../styles/theme.ts';

const CardWrapper = styled.div`
  background-color: ${theme.colors.white};
  padding: 30px;
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.1),
    0 3px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 1200px;
  min-width: 300px;

  @media (max-width: 768px) {
    padding: 20px;
  }

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
    font-size: 2.5rem;
    margin: 8px 0;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
`;

const ImageGridWrapper = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
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

  const tourItems = useMemo(() => generateTourData(tour), [tour]);

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
