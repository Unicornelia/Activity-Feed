import { FC } from 'react';
import styled from 'styled-components';
import { fetchActivities } from '../../api/fetchActivities.ts';
import { useQuery } from '@tanstack/react-query';
import ActivityCard from '../../components/ActivityCard';
import { Tour } from '../../types.ts';

const Container = styled.main`
  display: inline-grid;
  background-color: #f5f4e9;
  color: #242424;
  margin: 0 auto;
  overflow-x: hidden;
`;

const ActivityFeed: FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tours'],
    queryFn: fetchActivities,
    retry: 3,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error fetching activities</p>;

  return (
    <Container>
      {data.tours.map((tour: Tour, index: number) => (
        <ActivityCard key={index} {...tour} />
      ))}
    </Container>
  );
};

export default ActivityFeed;
