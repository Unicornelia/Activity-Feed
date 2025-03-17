import { formatDate } from '../../utils';
import styled from 'styled-components';
import { FC } from 'react';
import { Tour } from '../../types.ts';
import UserCard from '../UserCard';

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
    </CardWrapper>
  );
};

export default ActivityCard;
